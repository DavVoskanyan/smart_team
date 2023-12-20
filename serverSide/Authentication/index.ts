import authenticationRouter from './router/AuthenitactionRouter';
import express from 'express';
const app = express();

// Использование маршрутов для авторизации
app.use('/auth', authenticationRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});