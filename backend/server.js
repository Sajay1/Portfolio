const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORRECT Mailtrap Live SMTP configuration
const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "c3271d469509e134c416dfe27fbc71e0"  // Same API token as password
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, message } = req.body;

    // Use a simple from address that doesn't require domain verification
    const mailOptions = {
      from: `"Portfolio"  info@mailtrap.ciz`, // Simple from address
      to: 'sajaysuresh307@gmail.com',
      replyTo: email, // This allows you to reply to the actual sender
      subject: `New Contact from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p><small>Sent from portfolio contact form</small></p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!',
      messageId: info.messageId
    });
    
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email: ' + error.message 
    });
  }
});

// Test endpoint to verify credentials
app.get('/api/test-connection', async (req, res) => {
  try {
    await transporter.verify();
    res.json({ 
      success: true, 
      message: 'Mailtrap connection successful!' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Connection failed: ' + error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});