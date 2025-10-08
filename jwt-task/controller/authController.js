

const { userinfo } = require('../users')
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my_super_secret'; // Define it here


exports.dashboard = (req, res) => {
    //console.warn('3rd authController');
    res.json({ message: 'dashboard viewing' });
}

exports.login = (req, res) => {
    console.warn('req.body---->', req.body);
    const { username, password } = req.body
    for (const element of userinfo) {
        console.warn('element.username---->', element.username);
        if (element.username === username && element.password === password) {
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ message: 'login successful', token });
        }
        res.status(401).json({ message: 'Invalid credentials' });
    }

}

exports.logout = (req, res) => {
    res.json({ message: 'logout successful' });
}


