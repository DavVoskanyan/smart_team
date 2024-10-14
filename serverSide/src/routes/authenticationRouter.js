const express = require('express');
const authenticationController = require('../controllers/authenticationController');
const authMiddleware = require('../middlewares/authenticationMiddleware');

const authenticationRouter = express.Router();

authenticationRouter.post('/register', authenticationController.register);
authenticationRouter.post('/login', authenticationController.login);
// router.post('/logout', authMiddleware, authenticationController.logout);

module.exports = authenticationRouter;