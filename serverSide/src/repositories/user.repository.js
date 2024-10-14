const Theme = require('../models/theme.model');
const Color = require('../models/color.model');
const User = require('../models/user.model');
const Sequelize = require('sequelize');

class UserRepository {
    static async getOneUser(searchParametersObject) {
        return await User.findOne({ where: searchParametersObject});
    }
    static async getAllUsers(searchParametersObject) {
        return await User.findAll({ where: searchParametersObject});
    }
    // static async getUsersByCompanyId(searchParameterObject) {
    //     return await User.
    // }
    static async createUser(userDto) {
        let userThemeId = (await Theme.findAll({ order: Sequelize.literal('rand()') }))[0].id;
        let avatarBackgroundColorId = (await Color.findAll({ order: Sequelize.literal('rand()') }))[0].id;

        userDto.theme_id = userThemeId;
        userDto.avatar_background_color_id = avatarBackgroundColorId;

        await User.create(userDto);
    }
}

module.exports = UserRepository;