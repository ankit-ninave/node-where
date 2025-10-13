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
const { pool, isPoolConnected } = require('../connection');


(async () => {
  const status = await isPoolConnected();
  console.warn('Pool connected:', status);

  if (status) {
    const res = await pool.query('SELECT * FROM adm_user_mst');
    console.warn(res.rows);
  } else {
    console.error('Cannot run queries, pool not connected');
  }
})();

// console.warn('pool');
// console.warn('l_poolStatus',pool.l_poolStatus);

// Apply global middleware
app.use(loggerMiddleware);
app.use(express.json());

// Mount routes
app.use('/', authRoutes);

app.listen(6600, () => {
    //console.warn('1st index');
    //console.log('Server is running on http://localhost:6600');
});
