const express = require("express");
const Brevo = require("@getbrevo/brevo");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const DOMPurify = require("isomorphic-dompurify");
require("dotenv").config();

console.log("🔑 BREVO KEY LOADED:", process.env.BREVO_API_KEY);

const app = express();

/* ===============================
   TRUST PROXY (Render)
   =============================== */
app.set("trust proxy", 1);

/* ===============================
   CORS CONFIGURATION
   =============================== */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
      "https://maulik-portfolio-2411.vercel.app"
    ],
    methods: ["POST", "OPTIONS"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

/* ===============================
   RATE LIMIT
   =============================== */
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many messages sent. Please try again after 1 hour.",
  },
});

/* ===============================
   BREVO CONFIG
   =============================== */
const brevoApi = new Brevo.TransactionalEmailsApi();
brevoApi.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

/* ===============================
   CONTACT ROUTE
   =============================== */
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message, honeypot } = req.body;

    /* ---- Honeypot ---- */
    if (honeypot) {
      console.warn("🛑 Bot detected via honeypot");
      return res.status(400).json({ message: "Bot detected." });
    }

    /* ---- Sanitize ---- */
    const cleanName = DOMPurify.sanitize(name);
    const cleanEmail = DOMPurify.sanitize(email);
    const cleanSubject = DOMPurify.sanitize(subject);
    const cleanMessage = DOMPurify.sanitize(message);

    /* ---- Validation ---- */
    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      console.warn("⚠️ Validation failed: Missing fields");
      return res.status(400).json({ message: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      console.warn(`⚠️ Invalid email format: ${cleanEmail}`);
      return res.status(400).json({ message: "Invalid email format." });
    }

    /* ---- Prepare Email ---- */
    const emailData = new Brevo.SendSmtpEmail();

    emailData.subject = `Portfolio Inquiry: ${cleanSubject}`;
    emailData.htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${cleanMessage}</p>
        </body>
      </html>
    `;

    emailData.sender = {
      name: "Portfolio System",
      email: process.env.SENDER_EMAIL,
    };

    emailData.to = [
      {
        email: process.env.SENDER_EMAIL,
        name: "Maulik Gandhi",
      },
    ];

    emailData.replyTo = {
      email: cleanEmail,
      name: cleanName,
    };

    /* ---- LOG: Before Sending ---- */
    console.log("📤 Sending email...");
    console.log(`👤 From: ${cleanName} <${cleanEmail}>`);
    console.log(`📌 Subject: ${cleanSubject}`);

    /* ---- Send Email ---- */
    await brevoApi.sendTransacEmail(emailData);

    /* ---- LOG: Success ---- */
    console.log("✅ Email sent successfully!");
    console.log(`📩 Delivered to: ${process.env.SENDER_EMAIL}`);

    return res.status(200).json({
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("❌ Brevo Email Error:", error);
    return res.status(500).json({
      message: "Server error. Email not sent.",
    });
  }
});

/* ===============================
   SERVER START
   =============================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
