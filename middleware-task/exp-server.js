const express = require('express');
const app = express();
const { loggerMiddleware, AuthUserMiddleware } = require('./exp-log-middleware');
const { LoginAuth, Tokens } = require('./exp-auth-controller');

app.use(express.json());

app.use(loggerMiddleware);

app.get('/', (req, resp) => {
    resp.json({ message: 'Welcome home' });
})

app.get('/dashboard', AuthUserMiddleware, (req, resp) => {
    //console.warn('req=====>',req);
    const user = req.username;
    console.warn('userusername=====>', user);
    resp.send(`<h5>Hello ${user}! Welcome to your dashboard.</h5>`)
})

app.post('/login', LoginAuth)

app.get('/logout', AuthUserMiddleware, (req, res) => {
    const token = req.headers['authorization']; // get token from request
    if (token && Tokens.has(token)) {
        Tokens.delete(token); // remove it from Map
        console.warn(`User ${req.username} logged out, token removed.`);
        return res.json({ message: 'Logged out successfully' });
    }
    res.status(400).json({ message: 'Invalid token or already logged out' });
});
app.listen(6600);