const express = require('express');
const UsersController = require('../controllers/UsersController');
const authMiddleware = require('../middlewares/authenticationMiddleware');

const usersRouter = express.Router();

usersRouter.get('/getUserById/:id', authMiddleware, UsersController.getUserById);
usersRouter.get('/getUserByEmail/:email', authMiddleware, UsersController.getUserByEmail);
usersRouter.get('/getUsersByCompanyId/:id', authMiddleware, UsersController.getUsersByCompanyId);
usersRouter.get('/getUsersByDepartmentId/:id', authMiddleware, UsersController.getUsersByDepartmentId);
usersRouter.get('/getUserCharacteristicsByUserId/:id', authMiddleware, UsersController.getUserCharacteristicsByUserId);
usersRouter.get('/getUserInterestsByUserId/:id', authMiddleware, UsersController.getUserInterestsByUserId);
usersRouter.get('/getUserExperiencesByUserId/:id', authMiddleware, UsersController.getUserExperiencesByUserId);

usersRouter.post('/createUserCharacteristic', authMiddleware, UsersController.createUserCharacteristic);
usersRouter.post('/createUserInterest',authMiddleware, UsersController.createUserInterest);
usersRouter.post('/createUserExperience', authMiddleware, UsersController.createUserExperience);

usersRouter.put('/changeUserCharacteristic', authMiddleware, UsersController.changeUserCharacteristic);
usersRouter.put('/changeUserInterest', authMiddleware, UsersController.changeUserInterest);
usersRouter.put('/changeUserExperience', authMiddleware, UsersController.changeUserExperience);

usersRouter.delete('/deleteUserCharacteristicById/:id', authMiddleware, UsersController.deleteUserCharacteristicById);
usersRouter.delete('/deleteUserInterestById/:id', authMiddleware, UsersController.deleteUserInterestById);
usersRouter.delete('/deleteUserExperienceById/:id', authMiddleware, UsersController.deleteUserExperienceById);


module.exports = usersRouter;