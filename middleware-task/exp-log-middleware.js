const { Tokens } = require('./exp-auth-controller')

const loggerMiddleware = (req, resp, next) => {
    resp.on('finish', () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        console.warn(`we request method ${req.method} on this url ${req.url} log Current time: ${hour}:${minute}:${second}`);
    })
    next();
}


const AuthUserMiddleware = (req, resp, next) => {
    const token = req.headers['authorization'];
    if (!token) return resp.status(403).json({ message: 'forbidden invalid token' })
    //console.warn('token AuthUserMiddleware',token);
    console.warn('comes from',Tokens);
    const username = Tokens.get(token); // ✅ now this works with Map
    console.warn('username',username);
    req.username = username

    //console.warn('req.username',req.username);
    next();
}



module.exports = { loggerMiddleware, AuthUserMiddleware }