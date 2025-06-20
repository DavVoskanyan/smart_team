require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: [
        'http://client.dev.local'
    ],
    credentials: true
}));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});