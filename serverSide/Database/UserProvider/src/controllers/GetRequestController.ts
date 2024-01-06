import DatabaseConnection from '../DatabaseConnection';
import type {Connection, QueryError} from 'mysql2';
import UserRequestController from './UserRequsetController';
const connectionInstance: Promise<Connection> = DatabaseConnection.getConnectionInstance();

export default class GetRequestController extends UserRequestController {
    public static async getAllUsers(): Promise<any> {
        const connection: Connection = await connectionInstance;

        return await (
            connection
                .promise()
                .execute(`SELECT * FROM ${GetRequestController.tableName}`)
                .then(result => result[0])
        );
    }

    public static async getUserById(userId: number): Promise<any> {
        const connection: Connection = await connectionInstance;

        return (
            connection
                .promise()
                .execute(`SELECT * FROM ${GetRequestController.tableName} WHERE id = ${userId}`)
                .then(result => result[0])
        );
    }
}