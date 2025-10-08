

const {userinfo} = require('../users')


exports.dashboard = (req, res) => {
    //console.warn('3rd authController');
    res.json({ message: 'dashboard viewing' });
}


exports.login = (req, res) => {
  const { username, password } = req.body;

  console.warn('req.body:', req.body);

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  // Find user in the array
  const user = userinfo.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ message: 'Login successful', token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

exports.logout = (req, res) => {
    res.json({ message: 'logout successful' });
}


