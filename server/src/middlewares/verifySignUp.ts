import { NextFunction, Request, Response } from 'express';
import { User } from '../models/user.model';

export const checkDuplicateEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });

        if (user) {
            return res.status(400).send({ message: 'This email is already in use!' });
        }

        next();
    } catch (error) {
        return res.status(500).send({
            message: 'Server got itself in trouble. Unable to validate email!',
        });
    }
};

export const checkDuplicateUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });

        if (user) {
            return res.status(400).send({ message: 'This username is already in use!' });
        }

        next();
    } catch (error) {
        return res.status(500).send({
            message: 'Server got itself in trouble. Unable to validate username!',
        });
    }
};
