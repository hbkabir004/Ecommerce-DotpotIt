const User = require('../models/User');
require('dotenv').config();

// User registration controller
const registerUser = async (req, res) => {
  console.log('POST /register endpoint hit');
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    user = new User({
      username,
      email,
      password
    });

    // Save the user to the database
    user.save()
      .then(() => {
        res.status(201).json({ message: "User registered successfully." });
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
  console.log('POST /login endpoint hit');
  try {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    // Check for user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Compare the password
    if (user.password !== password) { // Assuming password is not hashed
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Respond with user information (without a token)
    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      message: "Logged in successfully"
    });
  } catch (err) {
    console.error("Error in loginUser:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
