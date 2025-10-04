

const authMiddleware = (req,resp,next)=>{
console.warn('Auth Middleware Called......');
const token = req.headers['authorization'];
console.warn('token',token);
next();
}


module.exports = authMiddleware