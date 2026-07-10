

const nodemailer = require("nodemailer");

const Contact = require("../models/Contact");

const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save(); 

//     const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// await transporter.sendMail({
//   from: process.env.EMAIL_USER,
//   to: process.env.EMAIL_USER,
//   subject: "New Portfolio Contact",
//   html:
//    `<h2>New Message</h2>
//     <p><b>Name:</b> ${name}</p>
//     <p><b>Email:</b> ${email}</p>
//     <p><b>Message:</b> ${message}</p>
//   ,`
    
// });
    

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.log("FULL ERROR:",error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { saveContact };