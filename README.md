# React01 - Modern Full-Stack Website

A stunning, production-ready full-stack web application featuring a modern React frontend with React Router and an Express.js backend with SQLite database. Built with beautiful animations, responsive design, and a dark theme.

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![Node](https://img.shields.io/badge/Node-Express-green)
![Database](https://img.shields.io/badge/Database-SQLite-003B57)

## 🌟 Features

### Frontend Features
- **Multi-Page Navigation** - Seamless routing with React Router DOM
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark Theme** - Modern dark UI with cyan/blue gradient accents
- **Smooth Animations** - CSS keyframe animations throughout
- **Modern UI Components** - Professional design system
- **Form Validation** - Client-side validation for contact form

### Backend Features
- **RESTful API** - Express.js server with full CRUD operations
- **SQLite Database** - Lightweight, file-based database
- **Form Submissions** - Contact form data persistence
- **Email Validation** - Server-side validation
- **Contact Management** - Full admin API for managing submissions
- **Statistics Endpoint** - Track submission metrics

## 📄 Pages

### 🏠 Home Page
- Hero section with animated gradient text
- Call-to-action buttons with ripple effects
- 6 feature cards showcasing key benefits
- Floating animated background shapes
- Responsive grid layout

### ℹ️ About Page
- Mission and Vision sections
- Alternating layout design
- Values showcase with animated icons
- Responsive 4-column grid
- Professional content presentation

### 🚀 Projects Page
- 6 project showcase cards
- Status badges (Completed/In Progress)
- Technology tags
- Interactive hover effects
- Staggered animation delays
- "View Details" and "Live Demo" buttons

### 📧 Contact Page
- **Functional Contact Form** with backend integration
- Contact information sidebar
- Social media links
- Form fields: Name, Email, Subject, Message
- Real-time validation
- Success/Error feedback
- Data stored in SQLite database

## 🎨 Design System

### Color Palette
```css
Primary Background: #0f0f1e
Secondary Background: #1a1a2e
Tertiary Background: #16213e
Accent Primary: #61dafb
Accent Secondary: #00d4ff
Text Primary: #ffffff
Text Secondary: #b8b8d1
Success: #00ff88
Error: #ff4d4d
Warning: #ffc107
```

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'
- **Hero Title**: 3.5rem, Bold (700)
- **Section Title**: 2.5rem
- **Card Title**: 1.5-1.8rem
- **Body Text**: 1rem-1.1rem
- **Line Height**: 1.6-1.8

### Animations
- **fadeInUp**: Vertical slide with fade
- **float**: Continuous floating motion
- **bounce**: Up-down bounce effect
- **slideInLeft/Right**: Horizontal slide animations
- **Transitions**: 0.3s ease for interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd react01
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the application**

**Option 1: Run both frontend and backend together (Recommended)**
```bash
npm run dev
```
This will start:
- React frontend on http://localhost:3001
- Express backend on http://localhost:5000

**Option 2: Run separately**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm start
```

### Production Build

```bash
npm run build
```

## 📂 Project Structure

```
react01/
├── public/                  # Static files
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── server/                  # Backend server
│   ├── server.js           # Express API server
│   ├── contacts.db         # SQLite database (auto-created)
│   └── .gitignore
├── src/                     # React application
│   ├── components/         # Reusable components
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js              # Main app component with routing
│   ├── App.css
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── .gitignore
└── README.md

3 directories, 28+ files
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Health Check
```http
GET /api/health
```
Returns server status

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Hello, I have a question..."
}
```

#### Get All Contacts (Admin)
```http
GET /api/contacts
```
Returns all contact submissions with count

#### Get Contact by ID
```http
GET /api/contacts/:id
```

#### Update Contact Status
```http
PATCH /api/contacts/:id/status
Content-Type: application/json

{
  "status": "read" | "unread" | "responded"
}
```

#### Delete Contact
```http
DELETE /api/contacts/:id
```

#### Get Statistics
```http
GET /api/stats
```
Returns total, unread, read, and responded counts

## 🗄️ Database Schema

### Contacts Table
```sql
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'unread'
)
```

### Status Values
- `unread` - New submission
- `read` - Viewed by admin
- `responded` - Response sent to user

## 🛠️ Technologies Used

### Frontend
- **React** 18.2.0 - UI library
- **React Router DOM** 7.14.0 - Client-side routing
- **CSS3** - Styling with modern features
  - CSS Grid
  - Flexbox
  - Animations & Transitions
  - Custom Properties

### Backend
- **Express.js** 5.2.1 - Web framework
- **SQLite3** 6.0.1 - Database
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing
- **Nodemon** - Development auto-reload

### Development Tools
- **Create React App** - React toolchain
- **Concurrently** - Run multiple commands
- **ESLint** - Code linting

## 📱 Responsive Breakpoints

```css
Mobile: < 768px
  - Single column layouts
  - Stacked navigation
  - Full-width cards

Tablet: 768px - 968px
  - 2-column grids
  - Adjusted spacing
  - Optimized typography

Desktop: > 968px
  - Multi-column layouts
  - Full feature set
  - Maximum content width: 1200-1400px
```

## ✨ Key Features Implementation

### 1. Contact Form with Backend
- Client-side validation
- Server-side validation
- Email regex validation
- Success/error feedback
- Data persistence in SQLite

### 2. React Router Integration
- BrowserRouter for clean URLs
- Route-based code splitting ready
- Link components for navigation
- Active link styling ready

### 3. Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox
- Media queries
- Fluid typography

### 4. Animations
- CSS keyframes
- Transition effects
- Staggered animations
- Hover interactions

## 🔒 Security Features

- Server-side validation
- SQL injection prevention (parameterized queries)
- CORS configuration
- Input sanitization
- Error handling middleware

## 🚦 Scripts Reference

```json
{
  "start": "react-scripts start",        // Frontend only (port 3001)
  "server": "nodemon server/server.js",  // Backend only (port 5000)
  "dev": "concurrently ...",             // Both together
  "build": "react-scripts build",        // Production build
  "test": "react-scripts test"           // Run tests
}
```

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 or 5000 is in use:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Database Issues
Delete and recreate database:
```bash
rm server/contacts.db
npm run server
```

### Module Not Found
Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Future Enhancements

- [ ] User authentication
- [ ] Admin dashboard for contact management
- [ ] Email notifications
- [ ] File upload capability
- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Search functionality
- [ ] Pagination for projects
- [ ] Filter and sort options
- [ ] Unit and integration tests
- [ ] Accessibility improvements
- [ ] Performance optimizations
- [ ] PWA features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ using React and Express.js

## 🙏 Acknowledgments

- React team for the amazing library
- Create React App for the toolchain
- Express.js community
- SQLite for the embedded database

---

**Happy Coding!** 🚀

For questions or issues, please use the contact form or open an issue on GitHub.
