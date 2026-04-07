# Copilot Instructions for React01

## Build, Test, and Development Commands

### Development
```bash
# Run both frontend and backend together (recommended)
npm run dev

# Run frontend only (http://localhost:3000)
npm start

# Run backend only (http://localhost:5001)
npm run server
```

### Build and Test
```bash
# Production build
npm run build

# Run all tests
npm test

# Run a single test file
npm test -- Contact.test.js
```

### Port Configuration
- **Frontend**: Port 3000 (dev server)
- **Backend**: Port 5001 (configured in `server/server.js` and proxied via `package.json`)
- The frontend proxy setting forwards `/api/*` requests to `http://localhost:5001`

## Architecture Overview

### Full-Stack Structure
This is a **monorepo full-stack application** with both frontend and backend in a single repository:

- **Frontend**: React SPA with React Router (client-side routing)
- **Backend**: Express.js REST API
- **Database**: SQLite (file-based, stored at `server/contacts.db`)
- **Communication**: Frontend uses relative URLs (`/api/*`) which are proxied to backend

### Component Organization
```
src/
├── components/     # Shared layout components (Navbar, Footer)
├── pages/          # Route-specific components (Home, About, Projects, Contact)
├── App.js          # Route definitions and main app structure
└── index.js        # React entry point
```

Each page component has a co-located CSS file (e.g., `Home.js` + `Home.css`).

### Routing Structure
Routes are defined in `src/App.js` using React Router v7:
- `/` → Home page (hero section + feature cards)
- `/about` → About page (mission, vision, values)
- `/projects` → Projects showcase page
- `/contact` → Contact form with backend integration

Use `<Link to="/path">` from `react-router-dom` for internal navigation, not `<a href>`.

### Backend API Architecture
The Express server (`server/server.js`) provides a RESTful API:

**Endpoints:**
- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - List all contacts (admin)
- `GET /api/contacts/:id` - Get single contact
- `PATCH /api/contacts/:id/status` - Update contact status
- `DELETE /api/contacts/:id` - Delete contact
- `GET /api/stats` - Get submission statistics

**Database Schema:**
```sql
contacts (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  subject TEXT,
  message TEXT,
  created_at DATETIME,
  status TEXT  -- 'unread' | 'read' | 'responded'
)
```

The API uses parameterized queries to prevent SQL injection.

## Key Conventions

### Styling Approach
- **No CSS framework** - Custom CSS written from scratch
- **Dark theme by default** with specific color palette (see below)
- **CSS co-location**: Each component has its own CSS file in the same directory
- **Global styles** in `src/index.css` set base styles and smooth scrolling

### Color Palette
Maintain consistency with these exact colors:
```css
/* Backgrounds */
--bg-primary: #0f0f1e      /* Page background */
--bg-secondary: #1a1a2e    /* Card backgrounds */
--bg-tertiary: #16213e     /* Gradient backgrounds */

/* Accents */
--accent-cyan: #61dafb     /* Primary accent (buttons, links, headings) */
--accent-blue: #00d4ff     /* Gradient accent */

/* Text */
--text-primary: #ffffff    /* Headings and important text */
--text-secondary: #b8b8d1  /* Body text and descriptions */

/* Feedback */
--success: #00ff88
--error: #ff4d4d
```

Use gradients for emphasis: `linear-gradient(135deg, #61dafb 0%, #00d4ff 100%)`

### Animation Patterns
Common CSS animations used throughout:
- `fadeInUp` - Vertical slide with opacity (page sections)
- `slideInLeft` / `slideInRight` - Horizontal slide (alternating content)
- `float` - Continuous floating motion (background shapes)
- `bounce` - Up-down bounce (icons on hover)

Transitions: Use `0.3s ease` for hover states and interactions.

### Button Styling
Buttons use a pseudo-element overlay for ripple effects:
- The button must have `position: relative` and `z-index: 1`
- The `::before` pseudo-element must have `z-index: -1` to prevent blocking clicks
- This pattern is used on all `.btn` classes

### Form Handling Pattern
The Contact form demonstrates the standard pattern:
1. Use `useState` for form data and status
2. Submit to backend API with `fetch()`
3. Show loading state while submitting (`status: 'sending'`)
4. Display success/error feedback with auto-dismiss timeout
5. Clear form on success

### Component Export Pattern
All components use default exports: `export default ComponentName`

### Responsive Design
Mobile-first approach with two main breakpoints:
- `@media (max-width: 768px)` - Mobile adjustments
- `@media (max-width: 968px)` - Tablet adjustments (where needed)

Use CSS Grid with `auto-fit` for responsive layouts:
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

### Icon Usage
Emoji icons are used throughout (⚡🎨📱🔒🚀💡) rather than icon libraries. Maintain this pattern for consistency.

## Backend Development

### Database Initialization
The database is auto-created on first run. To reset:
```bash
rm server/contacts.db
npm run server  # Will recreate with schema
```

### Adding New API Endpoints
1. Add route handler in `server/server.js`
2. Use parameterized queries: `db.run(sql, [param1, param2], callback)`
3. Return consistent JSON format: `{ success: boolean, data/error: any }`
4. Add error handling for all database operations

### Server Configuration
- CORS is enabled for all origins (appropriate for development)
- Body parser handles both JSON and URL-encoded data
- Graceful shutdown handlers are implemented for SIGINT and SIGTERM

## Common Tasks

### Adding a New Page
1. Create `src/pages/NewPage.js` and `src/pages/NewPage.css`
2. Add route in `src/App.js`: `<Route path="/new" element={<NewPage />} />`
3. Add navigation link in `src/components/Navbar.js`
4. Add footer link in `src/components/Footer.js` (if appropriate)
5. Follow existing animation patterns (fadeInUp on page load)

### Updating the Contact Form
The form connects to `POST /api/contact`. The expected payload:
```json
{
  "name": "string",
  "email": "string (validated)",
  "subject": "string",
  "message": "string"
}
```

All fields are required and validated on both client and server.

### Modifying Styles
- Never add inline styles - always use CSS classes
- Check if a similar style already exists before adding new rules
- Maintain the existing animation and transition timing (0.3s ease)
- Ensure dark theme contrast ratios remain accessible
