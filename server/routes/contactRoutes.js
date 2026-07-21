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

    // await resend.emails.send({
    //   from: "Portfolio <onboarding@resend.dev>",
    //   to: process.env.EMAIL_USER,
    //   reply_to: email,
    //   subject: "New Portfolio Message",
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });
await resend.emails.send({
  from: "Ritik Chaurasiya <onboarding@resend.dev>",
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `New Contact Form Submission`,
  html: `
  <div style="background:#f4f7fb;padding:40px 20px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:650px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

      <!-- Header -->
      <div style="background:#1E3A8A;padding:24px;text-align:center;">
        <h1 style="margin:0;color:#ffffff;font-size:24px;">
          Portfolio Contact Form
        </h1>
      </div>

      <!-- Body -->
      <div style="padding:30px;">

        <p style="font-size:16px;color:#374151;margin-bottom:25px;">
          You have received a new message from your portfolio website.
        </p>

        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:12px;font-weight:bold;background:#f8fafc;width:140px;border:1px solid #e5e7eb;">
              Name
            </td>
            <td style="padding:12px;border:1px solid #e5e7eb;">
              ${name}
            </td>
          </tr>

          <tr>
            <td style="padding:12px;font-weight:bold;background:#f8fafc;border:1px solid #e5e7eb;">
              Email
            </td>
            <td style="padding:12px;border:1px solid #e5e7eb;">
              ${email}
            </td>
          </tr>
        </table>

        <h3 style="margin-top:30px;color:#1E3A8A;">
          Message
        </h3>

        <div style="padding:20px;background:#f9fafb;border-left:4px solid #2563EB;border-radius:6px;color:#374151;line-height:1.7;">
          ${message}
        </div>

      </div>

      <!-- Footer -->
      <div style="background:#f8fafc;padding:18px;text-align:center;color:#6b7280;font-size:13px;">
        This email was automatically generated from your portfolio website.
      </div>

    </div>
  </div>
  `,
});

    await Message.create({ name, email, message });

    res.json({ success: true });

  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
         

