const nodemailer = require('nodemailer');

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pavanikodali999@gmail.com',
        pass: 'appv wsog alzn uuer' // App password
      }
    });

    const mailOptions = {
      from: email,
      to: 'pavanikodali999@gmail.com',
      subject: 'New Message from Expense Tracker Contact Form',
      text: `From: ${name} (${email})\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });

  } catch (error) {
    console.error("Error sending message:", error.message);
    res.status(500).json({ message: "Failed to send message." });
  }
};
