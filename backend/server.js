const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const DOMPurify = require('isomorphic-dompurify'); // For sanitization
require('dotenv').config();

const app = express();

// 1. Enhanced Security: Dynamic CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["POST"],
    optionsSuccessStatus: 200
}));

app.use(express.json());

// 2. Spam Prevention: Rate Limiting
const contactLimit = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, 
    message: { message: "Too many messages sent. Please try again in an hour." }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// 3. Integrated Route with Sanitization and Honeypot
app.post('/api/contact', contactLimit, async (req, res) => {
    const { name, email, subject, message, honeypot } = req.body;

    // A. Honeypot check: If filled, it's a bot
    if (honeypot) {
        return res.status(400).json({ message: "Bot detected. Request denied." });
    }

    // B. Data Sanitization: Strip HTML/Scripts
    const cleanName = DOMPurify.sanitize(name);
    const cleanEmail = DOMPurify.sanitize(email);
    const cleanSubject = DOMPurify.sanitize(subject);
    const cleanMessage = DOMPurify.sanitize(message);

    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
        return res.status(400).json({ message: "Invalid input or missing fields." });
    }

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Portfolio Inquiry: ${cleanSubject}`,
        text: `New message from ${cleanName} (${cleanEmail}):\n\n${cleanMessage}`,
        replyTo: cleanEmail 
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Success" });
    } catch (error) {
        console.error("Mail Error:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running safely on port ${PORT}`));