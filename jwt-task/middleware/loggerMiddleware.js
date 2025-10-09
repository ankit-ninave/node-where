


// middleware/loggerMiddleware.js
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '..', 'logs', 'access.log');

// ensure logs dir exists
fs.mkdirSync(path.dirname(logFile), { recursive: true });

function getClientIp(req) {
  // if behind proxy (nginx, load balancer), x-forwarded-for may contain a list
  const xff = req.headers['x-forwarded-for'];
  if (xff) return xff.split(',')[0].trim();
  // express exposes req.ip if trust proxy set; fallback to connection remote address
  return req.ip || req.connection?.remoteAddress || req.socket?.remoteAddress || 'unknown';
}

const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  // when response finishes, write a log line
  res.on('finish', () => {
    const duration = Date.now() - start;

    // If you set req.user in auth middleware, you can log it
    const user = req.user ? { id: req.user.id, email: req.user.email } : null;

    const entry = {
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.originalUrl || req.url,
      status: res.statusCode,
      durationMs: duration,
      ip: getClientIp(req),
      user,
      userAgent: req.headers['user-agent'] || '',
      // optional: you can include some headers if needed, but be careful about PII
      // headers: req.headers
    };

    // append as single-line JSON (easy to parse)
    fs.appendFile(logFile, JSON.stringify(entry) + '\n', err => {
      if (err) console.error('Failed to write access log', err);
    });
  });

  next();
};


module.exports = loggerMiddleware