// db/connection.js
const { Pool } = require('pg');

// --- Create the connection pool (singleton)
const pool = new Pool({
  user:'postgres',
  host:'localhost',
  database:'devtodo',
  password:'@admin123',
  port:5433
});



// --- Test connection on startup (optional but standard)
(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('PostgreSQL time:', res.rows[0].now);
  } catch (err) {
    console.error('❌ Initial connection failed:', err.message);
  }
})();

// --- Export pool for reuse in the app
module.exports = pool;
