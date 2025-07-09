require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const { login } = require('./controllers/autheticationController');
const authenticateToken = require('./middlewares/authenticationMiddleware');


app.use(express.json());
app.use(bodyParser.json());

app.use(cors({
    origin: [
        'http://client.dev.local'
    ],
    credentials: true
}));


app.post('/login', login);
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is protected data', user: req.user });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});