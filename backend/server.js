const express = require('express');
const authRoutes = require('./authRoutes'); // Import the authentication routes
const verifyToken = require('./authMiddleware'); // Import the authentication middleware

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Welcome Route
app.get('/', (req, res) => {
  res.send('Welcome to Marma Backend API!');
});

// Use the authentication routes
app.use('/auth', authRoutes); // Mount the authentication routes at the '/auth' path

// Define a protected route as an example
app.get('/profile', verifyToken, (req, res) => {
  res.json({ userId: req.user.userId });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
