const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save message to MongoDB
    const savedMessage = await Message.create({ name, email, message });

    // 2️⃣ Setup Email Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Email Sent to YOU
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // 4️⃣ Auto reply to USER (optional)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hello ${name},\n\nThanks for your message. I will reply soon.\n\nRegards,\nRitik`,
    });

    res.json({ success: true, message: "Message saved & email sent" });
  } catch (error) {
    console.log("Contact Error ❌", error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
