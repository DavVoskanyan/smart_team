type JWTPayload = {userId: number, iat: number, exp: number};

class JWTController {
    private constructor() {}

    static generateToken = (userId: number): string => {
        const payload: JWTPayload = this.payloadProvider(userId);
        const jsonWebTokenInstance = require('jsonwebtoken');
        const secretKey: string = 'pablo';

        return jsonWebTokenInstance.sign(
            payload,
            secretKey,
        );
    }
    static decodeToken = async (token: string): Promise<any> => {
        const jsonWebTokenInstance = require('jsonwebtoken');

        return new Promise((resolve, reject) => {
            jsonWebTokenInstance.verify(token, 'pablo', (error: Error | null, decodedPayload: any): void => {
                if(error) { reject(error); }
                else { resolve(decodedPayload); }
            });
        });
    }

    private static payloadProvider = (userId: number): JWTPayload => {
        const currentDate = new Date();
        return {
            userId: userId,
            iat: this.generateUnixTimestampFromDate(currentDate),
            exp: this.expirationDateUnixTimestampProvider(currentDate),
        };
    }
    private static expirationDateUnixTimestampProvider = (date: Date): number => {
        const ONE_WEEK_IN_SECONDS: number = 604800;
        const currentDateTimestamp: number = this.generateUnixTimestampFromDate(date);

        return currentDateTimestamp + ONE_WEEK_IN_SECONDS;
    }
    private static generateUnixTimestampFromDate = (date: Date): number => {
        return Math.floor(date.getTime() / 1000);
    }
}

export default JWTController;