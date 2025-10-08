

const {userinfo} = require('../users')


exports.dashboard = (req, res) => {
    //console.warn('3rd authController');
    res.json({ message: 'dashboard viewing' });
}

exports.login = (req, res) => {
    console.warn('req.body---->',req.body);
    console.warn('userinfo.username---->',userinfo.username);
    const { username, password } = req.body
    if (userinfo.username === username && userinfo.password === password) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: 'login successful', token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
}

exports.logout = (req, res) => {
    res.json({ message: 'logout successful' });
}


