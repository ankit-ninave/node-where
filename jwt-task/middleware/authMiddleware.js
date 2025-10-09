const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my_super_secret'; // Define it here

const authMiddleware = (req,resp,next)=>{
//console.warn('2nd authMiddleware');
//console.warn('Auth Middleware Called......');
  const token = req.headers['authorization'];
  if (!token) return resp.status(403).json({ message: 'Token missing' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return resp.status(401).json({ message: 'Invalid or expired token' });
  }
//console.warn('token',token);
}


module.exports = authMiddleware