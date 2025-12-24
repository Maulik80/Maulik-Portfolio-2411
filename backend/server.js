const express = require('express');
const Brevo = require('@getbrevo/brevo'); // Brevo SDK
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const DOMPurify = require('isomorphic-dompurify');
require('dotenv').config();

const app = express();

// 1. Enhanced Security: Dynamic CORS
// Allows Localhost (for testing) AND your Production Frontend (once deployed)
app.use(cors({
    origin: [
        "http://localhost:5173",             // Local Frontend
        process.env.FRONTEND_URL,            // Production Frontend (Set in Render)
        "https://maulik-portfolio-backend.onrender.com" // Safety Fallback
    ],
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

// 3. Brevo API Configuration
const apiInstance = new Brevo.TransactionalEmailsApi();
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY; // Securely pulled from .env

// 4. Contact Route
app.post('/api/contact', contactLimit, async (req, res) => {
    const { name, email, subject, message, honeypot } = req.body;

    // A. Honeypot check
    if (honeypot) {
        return res.status(400).json({ message: "Bot detected. Request denied." });
    }

    // B. Data Sanitization
    const cleanName = DOMPurify.sanitize(name);
    const cleanEmail = DOMPurify.sanitize(email);
    const cleanSubject = DOMPurify.sanitize(subject);
    const cleanMessage = DOMPurify.sanitize(message);

    // Validation
    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
        return res.status(400).json({ message: "Invalid input or missing fields." });
    }

    // C. Prepare Email Object for Brevo
    const sendSmtpEmail = new Brevo.SendSmtpEmail();
    
    sendSmtpEmail.subject = `Portfolio Inquiry: ${cleanSubject}`;
    sendSmtpEmail.htmlContent = `
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #333;">New Message from Portfolio</h2>
                <p><strong>Name:</strong> ${cleanName}</p>
                <p><strong>Email:</strong> ${cleanEmail}</p>
                <br/>
                <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007bff;">
                    <strong>Message:</strong><br/>
                    ${cleanMessage}
                </div>
            </body>
        </html>
    `;
    
    // SENDER: Must be your verified sender in Brevo
    sendSmtpEmail.sender = { "name": "Portfolio System", "email": process.env.SENDER_EMAIL };
    sendSmtpEmail.to = [{ "email": process.env.SENDER_EMAIL, "name": "Maulik Gandhi" }];
    sendSmtpEmail.replyTo = { "email": cleanEmail, "name": cleanName };

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log(`Email sent successfully from ${cleanEmail}`);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Brevo API Error:", error);
        res.status(500).json({ message: "Server error. Could not send message." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running safely on port ${PORT}`));