// Request → Logger Middleware → Auth Middleware → Controller → Response
/***************************************************
project/
│
├─ index.js                 # Main server
├─ controllers/
│   └─ authController.js    # Login, token generation
├─ middleware/
│   └─ authMiddleware.js    # JWT verification
│   └─ loggerMiddleware.js  # Request logging
├─ routes/
│   └─ authRoutes.js        # /login, /logout routes
└─ users.js                 # Example users or DB mock
****************************************************/

const express = require('express');
const app = express();
const loggerMiddleware = require('./middleware/loggerMiddleware');
const authRoutes = require('./routes/authRoutes');
const pool = require('../connection')


// Apply global middleware
app.use(loggerMiddleware);
app.use(express.json());

// Mount routes
app.use('/', authRoutes);

app.listen(6600, () => {
    //console.warn('1st index');
    //console.log('Server is running on http://localhost:6600');
});



(async () => {
  try {
    const result = await pool.query('SELECT * FROM adm_user_mst');
    console.log('Users:', result.rows);
  } catch (err) {
    console.error('❌ Query error:', err.message);
  }
})();



console.warn('pool');