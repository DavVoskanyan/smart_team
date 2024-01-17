import UserTemplate from '../modelTemplates/UserTemplate';
import User from '../models/User';
import {DataTypes} from 'sequelize';

export default class PostRequestsController {
    public static async createNewUser(userData: UserTemplate): Promise<User> {
        return await User.create({
            first_name: userData.getFirstName,
            last_name: userData.getLastName,
            phone_number: userData.getPhoneNumber,
            address: userData.getAddress,
            password: userData.getPassword,
            birth_date: userData.getBirthDate,
        });
    }
}