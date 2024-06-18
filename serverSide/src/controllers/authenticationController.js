const authenticationService = require('../services/authenticationService');
const User = require('../models/user.model');
const Sequelize = require("sequelize");
const bcrypt = require('bcryptjs');
const UserForm = require("../forms/UserForm");
const UserRepository = require("../repositories/user.repository");
const ResponseStatusCodeService = require("../services/ResponseStatusCodeService");

class AuthenticationController {
    static register = async (req, res) => {
        let userFormInstance = new UserForm();
        userFormInstance.loadData(req.body);
        userFormInstance.password = await bcrypt.hash(req.body.password, 12);

        let existingUser = await User.findOne({ where: { email: userFormInstance.email } });
        if (existingUser) {
            return res.status(ResponseStatusCodeService.ALREADY_EXISTS).json({message: 'User already exists'});
        }

        await UserRepository.createUser(userFormInstance.getDto());
        let generatedToken = authenticationService.generateToken(userFormInstance.email);

        res.setHeader('Authorization', `Bearer ${generatedToken}`);
        return res.status(ResponseStatusCodeService.CREATED).json({status: true, message: 'User created'});
    }
    static login = async (req, res) => {
        let userEmail = req.body.email;
        let userPassword = req.body.password;

        let user = await User.findOne({ where: { email: userEmail } });
        if(!user) { return res.status(404).json({message: 'User not found'}); }

        let isPasswordSame = await bcrypt.compare(userPassword, user.password);
        if(!isPasswordSame) {
            return res.status(ResponseStatusCodeService.UNAUTHORIZED).json({message: 'Email or password is wrong'});
        }
        const generatedToken = authenticationService.generateToken(userEmail);

        res.setHeader('Authorization', `Bearer ${generatedToken}`);
        return res.status(ResponseStatusCodeService.OK).json({status: true, message: 'User login successfully'});
    }

    // static logout = (req, res) => {
    //
    // }
    // static getProfile = (req, res) => {
    //     const user = req.user;
    //     res.json({user});
    // }
}

const getProfile = (req, res) => {
    const user = req.user;
    res.json({user});
};

module.exports = AuthenticationController;