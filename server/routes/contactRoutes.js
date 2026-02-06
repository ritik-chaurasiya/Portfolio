const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
const Message = require("../models/Message");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: "All fields required" });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      reply_to: email,
      subject: "New Portfolio Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    await Message.create({ name, email, message });

    res.json({ success: true });

  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
         


// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");
// const Message = require("../models/Message");

// router.post("/", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ success: false });
//     }

//     // ✅ Save to DB
//     await Message.create({ name, email, message });

//     // ✅ Transporter INSIDE try
//    // ✅ Transporter for Render (Gmail service mode)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });


//     // ✅ Send Mail
//     await transporter.sendMail({
//       from: `"Portfolio" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: "New Portfolio Message",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     });

//     res.json({ success: true });

//   } catch (err) {
//     console.log("CONTACT ERROR:", err);
//     res.status(500).json({ success: false });
//   }
// });

// module.exports = router;