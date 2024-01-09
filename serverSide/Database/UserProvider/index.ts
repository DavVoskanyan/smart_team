import express from 'express';

import getRequestRouter from './src/routers/getRequestRouter';
import postRequestRouter from  './src/routers/postRequestRouter';

const app = express();
app.use(express.json());

app.use('/get', getRequestRouter);
app.use('/post', postRequestRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});