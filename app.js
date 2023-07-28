// sendEmail.js
const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'dilmajoyd@gmail.com', 
    pass: 'rnbfxgpbqqqnzbwx' 
  }
});

// Define email options
const mailOptions = {
  from: 'dilmajoyd@gmail.com', 
  to: 'test0011dj@gmail.com', 
  subject: 'Test Email', 
  text: 'This is a test email sent from Nodemailer.'
};

// Sending the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
