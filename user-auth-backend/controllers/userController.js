const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
require('dotenv').config();

// User registration controller
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving the user
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    user = new User({
      username,
      email,
      password
    });

    // Save the user to the database
    user.save()
      .then(() => {
        res.status(201).json({ message: "User registered successfully. Please verify your email." });
      })
      .catch(err => {
        console.error("Error saving user:", err);  // Log the specific error for debugging
        res.status(500).json({ message: "Failed to register user" });
      });
  } catch (err) {
    console.error("Error in registerUser:", err);  // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({email, password});

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    // Check for user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Check if password matches
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(400).json({ message: "Invalid credentials" });
    // }

    // Check if the user's email is verified
    if (!user.isVerified) {
      return res.status(400).json({ message: "Please verify your email" });
    }

    // Create a JWT token
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: 3600, // 1 hour
    // });

    res.json({
      // token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Error in loginUser:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// const verifyUser = async (req, res) => {
//   const { token } = req.params;

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.userId);

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid token' });
//     }

//     user.isVerified = true;
//     await user.save();

//     res.status(200).json({ message: 'Email verified successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// const sendVerificationEmail = async (email, link) => {
//   let testAccount = await nodemailer.createTestAccount();

//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass  // generated ethereal password
//     }
//   });

//   const mailOptions = {
//     from: '"Your App" <yourapp@example.com>',
//     to: email,
//     subject: 'Email Verification',
//     text: `Click the following link to verify your email: ${link}`
//   };

//   let info = await transporter.sendMail(mailOptions);

//   console.log('Message sent: %s', info.messageId);
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// };

module.exports = {
  registerUser,
  loginUser,
  // verifyUser
};
