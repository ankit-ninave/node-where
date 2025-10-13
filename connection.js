const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'devtodo',
  password: '@admin123',
  port: 5433
}) 


// Function to test pool connection
async function isPoolConnected() {
  try {
    await pool.query('SELECT 1'); // simple test query
    return true;
  } catch (err) {
    console.error('❌ Connection error', err.stack);
    return false;
  }
}
module.exports = { pool, isPoolConnected };
