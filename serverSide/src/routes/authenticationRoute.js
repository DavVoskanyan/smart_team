const express = require('express');
const authenticationController = require('../controllers/authenticationController');
const authMiddleware = require('../middlewares/authenticationMiddleware');

const router = express.Router();

// router.post('/register', authMiddleware, authenticationController.register);
router.post('/register', authenticationController.register);
router.post('/login', authMiddleware, authenticationController.login);
router.post('/logout', authMiddleware, authenticationController.logout);

module.exports = router;