

const { userinfo } = require('../users')
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my_super_secret'; // Define it here


exports.dashboard = (req, res) => {
    //console.warn('3rd authController');
    res.json({ message: 'dashboard viewing' });
}

exports.login = (req, res) => {
  const { username, password } = req.body;
  // Find user
  const user = userinfo.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate token
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '15Seconds' });
  return res.json({ message: 'Login successful', token });
};

exports.logout = (req, res) => {
    res.json({ message: 'logout successful' });
}


