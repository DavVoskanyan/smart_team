import mysql2, {Connection} from 'mysql2';

class DatabaseConnection {
    private constructor() {}

    private static connectionInstance: Connection;

    public static async getConnectionInstance(): Promise<Connection> {
        if(!DatabaseConnection.hasConnectionInstance()) {
            DatabaseConnection.connectionInstance = DatabaseConnection.createConnectionInstance();
            await (DatabaseConnection.connectToDatabase().catch((err) => console.log(err.message)));
        }

        return DatabaseConnection.connectionInstance;
    }
    public static hasConnectionInstance(): boolean {
        return !!DatabaseConnection.connectionInstance;
    }

    private static createConnectionInstance(): Connection {
        return mysql2.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'pass',
            database: 'smart_team_database'
        });
    }

    private static connectToDatabase(): Promise<Connection> {
        return new Promise((resolve, reject) => {
            DatabaseConnection.connectionInstance.connect((err: any): void => {
                if(err) { reject(err) }
                else { resolve(DatabaseConnection.connectionInstance) }
            });
        })
    }
}


export default DatabaseConnection;