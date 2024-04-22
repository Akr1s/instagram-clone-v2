import { Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/user.model';

dotenv.config();

const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const parsedToken = verify(req.session!.token, process.env.AUTH_SECRET_KEY!) as JwtPayload;
        const user = await User.findOne({ where: { id: parsedToken.id } });

        if (!user) {
            throw new Error('');
        }

        return res.status(200).send(user);
    } catch (error) {
        return res.status(404).send({
            message: 'The user was not found!',
        });
    }
};

export default {
    getCurrentUser,
};
