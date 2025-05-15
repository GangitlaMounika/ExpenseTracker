const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pavanikodali999@gmail.com',
        pass: 'appv wsog alzn uuer'  // ✅ SAME app password you're using
      }
    });

    const mailOptions = {
      from: 'pavanikodali999@gmail.com',
      to: 'pavanikodali999@gmail.com',
      subject: `Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Email error:", error.message);
    res.status(500).json({ message: "Failed to send email." });
  }
});

module.exports = router;
