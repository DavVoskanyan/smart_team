require('dotenv').config();
const express = require('express');
const authenticationRoute = require('./routes/authenticationRoute');
// const userRoutes = require('./src/routes/userRoutes');
const authenticationMiddleware = require('./middlewares/authenticationMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authenticationRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});