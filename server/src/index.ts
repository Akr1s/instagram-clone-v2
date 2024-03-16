import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { sequelize } from './configuration/database';
import { dayInSeconds } from './constants';
import appRouter from './routes';
import { testDbConnection } from './utils/testDbConnection.util';

dotenv.config();

const app = express();
const dayInMiliseconds = dayInSeconds * 1000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        name: 'instagram-session',
        secret: process.env.SESSION_SECRET,
        maxAge: dayInMiliseconds,
    }),
);
app.use('/api/', appRouter);

const port = process.env.PORT || 5001;

testDbConnection().then(async () => {
    await sequelize.sync({ force: true });
    console.log('Drop and Resync Db');

    app.listen(port, () => {
        console.log(`Instagram app is listening on port ${port}`);
    });
});
