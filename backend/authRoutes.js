const bcrypt = require('bcrypt');
const express = require('express');
const db = require('./db');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const existingUser = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user to the database
    const result = await db.one(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
      [username, email, hashedPassword]
    );

    console.log(result); // Log the result to debug

    res.status(201).json({ userId: result.id });
  } catch (error) {
    console.error(error); // Log the full error object for debugging
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
