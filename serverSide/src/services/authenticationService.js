const jwt = require('jsonwebtoken');
const process = require('process');


class AuthenticationService {
    static generateToken = (userEmail) => {
        let secretKey = process.env.JWT_SECRET_KEY;
        let tokenPayload = {
            iss: 'Smart Team',
            sub: userEmail,
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            iat: Math.floor(Date.now() / 1000),
        }
        return jwt.sign(tokenPayload, secretKey);
    }
    static validateToken = async (token) => {
        let secretKey = process.env.JWT_SECRET_KEY;
        let verificationResult = await jwt.verify(token, secretKey);

        if(verificationResult instanceof Error) {
            return {
                status: false,
                message: verificationResult.message
            }
        }
        return {
            status: true,
            message: null,
            payload: verificationResult
        }
    }
}

module.exports = AuthenticationService;