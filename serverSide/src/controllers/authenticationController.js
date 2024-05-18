const authenticationService = require('../services/authenticationService');
const User = require('../models/user.model');
const Sequelize = require("sequelize");

class AuthenticationController {
    static register = async (req, res) => {
        try {
            let user = await User.create({
                first_name: 'David',
                last_name: 'voskanyan',
                birthdate: new Date(),
                email: 'helloworld@smp.am',
                is_email_verified: true,
                password:'helloWorld',
                phone:'077005552',
                address:'address',
                description: 'description',
                avatar_image_file:'',
                avatar_background_color_id:1,
                theme_id:1,
                is_admin:true,
                creation_date: new Date(),
                is_deleted: false
            });
            res.status(201).json(user);

        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    static login = (req, res) => {
        const { username, password } = req.body;
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
        const token = authenticationService.generateToken(user);

        res.json({ token });
    }
    static logout = (req, res) => {

    }
    static getProfile = (req, res) => {
        const user = req.user;
        res.json({ user });
    }
}

const getProfile = (req, res) => {
    const user = req.user;
    res.json({ user });
};

module.exports = AuthenticationController;