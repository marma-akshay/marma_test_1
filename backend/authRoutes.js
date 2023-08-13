const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./db');

const router = express.Router();

router.post('/register', async (req, res) => {
  // ... (existing registration code) ...
});

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
