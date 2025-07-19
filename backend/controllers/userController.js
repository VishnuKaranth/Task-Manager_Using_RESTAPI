// controllers/userController.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const registerUser = async (req, res) => {
  console.log('Register user endpoint hit with body:', req.body); // <-- ADD THIS LINE

  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      console.log('Registration failed: Missing name, email, or password.');
      return res.status(400).json({ message: 'Please enter all fields' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log(`Registration failed: User with email ${email} already exists.`);
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Creating new user...');
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log('User created successfully:', user);

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      console.log('Registration failed: User could not be created.');
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('--- ERROR DURING REGISTRATION ---'); // <-- ADD THIS LINE
    console.error(error); // <-- ADD THIS LINE
    res.status(400).json({ message: 'Server error during registration.' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
