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


const AuthUserMiddleware = (req,resp,next) =>{
    const token2 = req.headers;
    const token = req.headers['authorization'];
    console.warn('token2    ====>',token2);
    console.warn('token====>',token);

    if(!token) return resp.status(403).json({message:'forbidden invalid token'})

    next();
}


module.exports = {loggerMiddleware,AuthUserMiddleware}