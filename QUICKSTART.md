# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Both Frontend & Backend
```bash
npm run dev
```

This command starts:
- **Backend API** on `http://localhost:5000`
- **React Frontend** on `http://localhost:3001`

### 3. Open Your Browser
Navigate to: **http://localhost:3001**

## 🎯 What You'll See

### Home Page (`/`)
- Beautiful hero section with animated gradients
- 6 feature cards showcasing capabilities
- Floating animated background shapes

### About Page (`/about`)
- Company mission and vision
- Core values with icons
- Professional alternating layout

### Projects Page (`/projects`)
- 6 project showcases
- Technology tags
- Status badges

### Contact Page (`/contact`)
- **Working contact form** connected to database
- Fill out the form and submit
- Data is saved to SQLite database

## 🧪 Test the Contact Form

1. Go to http://localhost:3001/contact
2. Fill out the form
3. Click "Send Message"
4. See success message
5. Check database via API

## 📊 Backend API Endpoints

```bash
# Health Check
curl http://localhost:5000/api/health

# Get All Contacts
curl http://localhost:5000/api/contacts

# Get Statistics
curl http://localhost:5000/api/stats
```

## 🛑 Stopping the Servers

Press `Ctrl+C` in the terminal

---

**Enjoy!** 🎉
