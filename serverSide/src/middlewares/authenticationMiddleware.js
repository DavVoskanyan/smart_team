const jwt = require('jsonwebtoken');
const process = require('process');

const authenticationMiddleware = async (req, res, next) => {
    console.log(process.env.ENVIORMENT_MODE);
    if(process.env.ENVIORMENT_MODE === 'development') { return next(); }

    // const token = req.headers.authorization?.split(' ')[1];
    const token = req.headers.authorization;

    if (!token) { return res.status(401).send('Unauthorized: Missing token'); }
    else { return next(); }
    // try {
    //     req.user = jwt.verify(token, 'your_secret_key');
    //     next();
    //
    // } catch (error) {
    //     res.status(401).send('Unauthorized: Invalid token');
    // }
};

module.exports = authenticationMiddleware;