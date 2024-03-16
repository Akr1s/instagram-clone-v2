import { NextFunction, Request, Response } from 'express';
import { VerifyCallback, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.session!.token;

        if (!token) {
            return res.status(403).send({ message: 'No token proveded!' });
        }

        verify(token, process.env.AUTH_SECRET_KEY!);
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Unauthorized!' });
    }
};
