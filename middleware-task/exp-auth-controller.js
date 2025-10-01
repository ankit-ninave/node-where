

const crypto = require('crypto');
const { verifyToken } = require('../authController');

const Tokens = new Map()

let userdetails = [
  { username: "ankit", password: "1234" },
  { username: "raj", password: "abcd" }
]

const LoginAuth = (req, res) => {
  const { username, password } = req.body;

  // check each user
  for (const element of userdetails) {
    if (username === element.username && password === element.password) {
      const token = crypto.randomBytes(16).toString('hex');
      Tokens.set(token, username);
      console.warn('Token setted',token);

      setTimeout(() => {
        Tokens.delete(token);
        console.warn(`Token expired for user ${username}`);
      }, 50000);

      return res.json({
        message: `Login successful for ${username}`,
        token
      });
    }
  }

  // if loop finishes with no match
  return res.status(401).json({ message: 'Invalid credentials' });

};
const verifyTokens = (token) => tokens.has(token)

module.exports = { LoginAuth, verifyTokens,Tokens }
