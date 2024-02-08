import authenticationRouter from './router/AuthenitactionRouter';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use('/auth', authenticationRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});