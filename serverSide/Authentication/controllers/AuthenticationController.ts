import {comparePasswordAndHash} from '../functions/functions';
import JWTController from './JWTController';

export default class AuthenticationController {
    static loginUser = async (req: any, res: any): Promise<void> => {
        const userDataFromDB = {
            id: 12,
            password: '$2b$10$qsE8gDKX99k4jXAKGhI7Euc/7SFW2gGDbf6bFhfhnwkJwdqsGQd2K',
        };
        const isPasswordRight: boolean = await comparePasswordAndHash(req.body.password, userDataFromDB.password);
        const token: string | null = isPasswordRight
            ? JWTController.generateToken(userDataFromDB.id)
            : null;

        res.send(JSON.stringify({
            status: !!token,
            token: token,
        }));
    };
    static registerUser = async (req: any, res: any) => {
        const userDataFromDB = {
            id: 12,
        };
        const token: string | null = JWTController.generateToken(userDataFromDB.id);

        res.send(JSON.stringify({
            status: !!token,
            token: token,
        }));
    };
    static refreshToken = async (req: any, res: any) => {
        const oldToken: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJpYXQiOjE3MDMwNDg2MTQsImV4cCI6MTcwMzY1MzQxNH0.1iEapyySdBWM87UkeZQ1uNWlFFUlf_0sz4ZSD8z9qgg`;

        const decodeToken = await JWTController.decodeToken(oldToken);
        const userIdFromOldToken: number = decodeToken.userId;
        const newToken: string = JWTController.generateToken(userIdFromOldToken);

        res.send(JSON.stringify({
            status: !!newToken,
            token: newToken,
        }));
    };
}