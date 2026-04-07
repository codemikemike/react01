const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize SQLite database
const dbPath = path.join(__dirname, 'contacts.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Create tables if they don't exist
function initializeDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'unread'
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Contacts table ready');
    }
  });
}

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Submit contact form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Invalid email address' 
    });
  }

  // Insert into database
  const sql = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;
  
  db.run(sql, [name, email, subject, message], function(err) {
    if (err) {
      console.error('Error inserting contact:', err.message);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to save contact message' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Contact message received successfully',
      id: this.lastID 
    });
  });
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', (req, res) => {
  const sql = `SELECT * FROM contacts ORDER BY created_at DESC`;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching contacts:', err.message);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch contacts' 
      });
    }

    res.json({ 
      success: true, 
      count: rows.length,
      contacts: rows 
    });
  });
});

// Get contact by ID
app.get('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM contacts WHERE id = ?`;
  
  db.get(sql, [id], (err, row) => {
    if (err) {
      console.error('Error fetching contact:', err.message);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch contact' 
      });
    }

    if (!row) {
      return res.status(404).json({ 
        success: false, 
        error: 'Contact not found' 
      });
    }

    res.json({ 
      success: true, 
      contact: row 
    });
  });
});

// Update contact status
app.patch('/api/contacts/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['unread', 'read', 'responded'].includes(status)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Invalid status. Must be: unread, read, or responded' 
    });
  }

  const sql = `UPDATE contacts SET status = ? WHERE id = ?`;
  
  db.run(sql, [status, id], function(err) {
    if (err) {
      console.error('Error updating contact:', err.message);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to update contact status' 
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'Contact not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Contact status updated' 
    });
  });
});

// Delete contact
app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM contacts WHERE id = ?`;
  
  db.run(sql, [id], function(err) {
    if (err) {
      console.error('Error deleting contact:', err.message);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to delete contact' 
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'Contact not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Contact deleted successfully' 
    });
  });
});

// Get statistics
app.get('/api/stats', (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN status = 'unread' THEN 1 ELSE 0 END) as unread,
      SUM(CASE WHEN status = 'read' THEN 1 ELSE 0 END) as read,
      SUM(CASE WHEN status = 'responded' THEN 1 ELSE 0 END) as responded
    FROM contacts
  `;
  
  db.get(sql, [], (err, row) => {
    if (err) {
      console.error('Error fetching stats:', err.message);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch statistics' 
      });
    }

    res.json({ 
      success: true, 
      stats: row 
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    error: 'Something went wrong!' 
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/contact`);
});

// Keep server alive
server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down gracefully...');
  server.close(() => {
    console.log('HTTP server closed');
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      }
      console.log('Database connection closed');
      process.exit(0);
    });
  });
});

process.on('SIGTERM', () => {
  console.log('\nSIGTERM signal received');
  server.close(() => {
    console.log('HTTP server closed');
    db.close((err) => {
      if (err) {
        console.error('Error closing database:', err.message);
      }
      console.log('Database connection closed');
      process.exit(0);
    });
  });
});
