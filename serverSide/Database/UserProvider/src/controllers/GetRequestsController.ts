import User from '../models/User';

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