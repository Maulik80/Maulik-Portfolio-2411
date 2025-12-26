# 🚀 Maulik Portfolio - Full Stack Web Application

A modern, responsive, and interactive portfolio website built to showcase my skills, projects, and professional journey. This project features a **React-based frontend** with a beautiful UI and a secure **Node.js/Express backend** for handling contact form submissions via Brevo.

🔗 **Live Demo:** [Insert Your Vercel Link Here]
🔌 **Backend API:** [Insert Your Render Link Here]

---

## ✨ Features

- **🎨 Modern UI/UX:** Built with **React** and **Tailwind CSS** for a sleek, responsive design.
- **🌙 Dark/Light Mode:** Seamless theme switching integrated into the Navbar.
- **📧 Working Contact Form:** Secure email delivery using **Brevo (formerly Sendinblue)** API.
- **🛡️ Security Best Practices:**
  - **Rate Limiting:** Prevents spam (max 5 emails/hour per IP).
  - **Honeypot Strategy:** Blocks automated bots.
  - **Input Sanitization:** Protects against XSS attacks using `isomorphic-dompurify`.
  - **CORS Configuration:** securely connects Frontend and Backend.
- **⚡ Fast Performance:** Powered by **Vite** for lightning-fast development and build times.

---

## 🛠️ Tech Stack

### **Frontend**
- **Library:** React (v19)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Notifications:** Custom Toast Hooks

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Email Service:** Brevo SDK (@getbrevo/brevo)
- **Security:** Express-Rate-Limit, CORS, DOMPurify

---

## 📂 Project Structure

This project follows a **Monorepo-style** structure:

```bash
Maulik-Portfolio-2411/
├── frontend/         # React Client Application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/          # Express Server Application
│   ├── server.js
│   └── package.json
│
└── README.md         # Project Documentation
