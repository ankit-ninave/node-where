const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// Public route
router.get('/', (req, res) => {
   res.send("<h6>Public Called and Worked.....</h6>");
});

// Protected routes
router.get('/dashboard', authMiddleware, authController.dashboard);

router.post('/login', authController.login);

router.get('/logout', authMiddleware, authController.logout);

module.exports = router;
