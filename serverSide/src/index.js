require('dotenv').config();
const express = require('express');
const authenticationRouter = require('./routes/authenticationRouter');
const usersRouter = require('./routes/usersRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authenticationRouter);
app.use('/user', usersRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});