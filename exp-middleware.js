// middleware.js
const { verifyToken } = require('./authController');

const loggerMiddleware = (req, res, next) => {
  const start = Date.now();
  console.log(`[REQUEST] ${req.method} ${req.url} at ${new Date().toISOString()}`);

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[RESPONSE] ${req.method} ${req.url} -> ${res.statusCode} (${duration}ms)`);
  });

  next();
};

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  console.warn('req.headers',req.headers);
  console.warn('token =========>',token);  
  if (!token) return res.status(401).json({ message: 'Unauthorized, token missing' });

  if (!verifyToken(token)) return res.status(403).json({ message: 'Forbidden, invalid token' });

  next();
};

module.exports = { loggerMiddleware, authMiddleware };
