
// authController.js
const crypto = require('crypto');

// Dummy user for demo
const USER = { username: 'admin', password: '1234' };

// Simple in-memory token store
const tokens = new Set();

const login = (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = crypto.randomBytes(16).toString('hex'); // generate token
    tokens.add(token);
    return res.json({ message: 'Login successful', token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

const verifyToken = (token) => tokens.has(token);

module.exports = { login, verifyToken };
