import express from 'express';
import AuthenticationController from '../controllers/AuthenticationController';
import bodyParser from 'body-parser';

const authenticationRouter = express.Router();

authenticationRouter.use(bodyParser.urlencoded({ extended: true }));
authenticationRouter.use(bodyParser.json());

authenticationRouter.get('/login', AuthenticationController.loginUser);
authenticationRouter.post('/register', AuthenticationController.registerUser);
authenticationRouter.get('/refresh_token', AuthenticationController.refreshToken);

export default authenticationRouter;
