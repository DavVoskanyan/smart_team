import User from '../models/User';
import UserTemplate from '../modelTemplates/UserTemplate';

export default class GetRequestsController {
    public static async getUserById(userId: number): Promise<User> {
        return User.findOne({
            where: {
                id: userId,
            },
            limit: 1,
        });
    }
}