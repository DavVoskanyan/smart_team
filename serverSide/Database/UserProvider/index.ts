import express from 'express';
import RequestsRouter from './src/requestsRouter';

const app = express();
app.use(express.json());

app.use('/users', RequestsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});