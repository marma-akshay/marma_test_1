const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./db');

const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const userExists = await db.oneOrNone('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
    if (userExists) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the user into the database
    const result = await db.one(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
      [username, email, hashedPassword]
    );

    res.status(201).json({ userId: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred. Please try again.' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate a JWT for the authenticated user
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

    // Respond with the token and user information
    res.status(200).json({ token, userId: user.id, username: user.username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
