import DatabaseConnection from '../DatabaseConnection';
import type {Connection, QueryError} from 'mysql2';
import UserRequestController from './UserRequsetController';
const connectionInstance: Promise<Connection> = DatabaseConnection.getConnectionInstance();

export default class PostRequestController extends UserRequestController {
    public static async createUser(userDataObject: any): Promise<boolean> {
        const connection: Connection = await connectionInstance;

        return new Promise((resolve, reject): void => {

        });
    }
    public static async createManyUsers(): Promise<boolean> {
        return new Promise((resolve, reject) => {

        });
    }
}