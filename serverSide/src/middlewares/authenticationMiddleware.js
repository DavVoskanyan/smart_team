const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
    // const token = req.headers.authorization?.split(' ')[1];
    const token = req.headers.authorization;

    if (!token) { return res.status(401).send('Unauthorized: Missing token'); }
    else { next(); }
    // try {
    //     req.user = jwt.verify(token, 'your_secret_key');
    //     next();
    //
    // } catch (error) {
    //     res.status(401).send('Unauthorized: Invalid token');
    // }
};

module.exports = authenticationMiddleware;