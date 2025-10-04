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

const express = require('./routes/authRoutes');