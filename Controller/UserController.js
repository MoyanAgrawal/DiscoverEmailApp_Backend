const User = require("../Model/UserSchema"); // Assuming your task schema is defined in a file named 'task.js' inside a 'models' directory
const nodemailer = require("nodemailer");

// Controller functions
const UserController = {
  // Create a new task
  createUser: async (req, res) => {
    console.log(req.body);
    try {
      const newUser = await User.create(req.body); // Assuming req.body contains the task data
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      
        const mailOptions = {
          from: process.env.EMAIL_USER, // sender
          to: req.body.email, //reciever
          subject: "Test Email",
          text: "Thank you",
          html: "<h1>Thank you for Registering🎉🎉</h1>", 
        };

        try {
          const info = await transporter.sendMail(mailOptions);
          console.log("Email sent:", info.response);
        } catch (error) {
          console.log("Email Unsent:", error);
        }
      
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

};


module.exports=UserController;