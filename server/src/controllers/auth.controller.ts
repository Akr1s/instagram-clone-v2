import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { compareSync, hashSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { dayInSeconds } from '../constants';

dotenv.config();

const signUp = async (req: Request, res: Response) => {
    try {
        await User.create({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashSync(req.body.password, 8),
            username: req.body.username,
        });

        return res.status(201).send({ message: 'User has been created successfully!' });
    } catch (error) {
        return res.status(500).send({
            message: 'Server got itself in trouble. Unable to create user',
        });
    }
};

const signIn = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });

        if (!user) {
            return res.status(404).send({ message: 'User with this username does not exist!' });
        }

        const isPasswordValid = compareSync(req.body.password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid password!' });
        }

        const token = sign({ id: user.id }, process.env.AUTH_SECRET_KEY!, {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: dayInSeconds,
        });

        req.session!.token = token;

        return res.status(200).send('Successful login');
    } catch (error) {
        return res.status(500).send({
            message: 'Server got itself in trouble. Unable to sign in!',
        });
    }
};

const singOut = async (req: Request, res: Response) => {
    try {
        req.session = null;

        return res.status(200).send({ message: 'You have been signed out!' });
    } catch (error) {
        return res.status(500).send({
            message: 'Server got itself in trouble. Cannot sign out!',
        });
    }
};

export default {
    signIn,
    signUp,
    singOut,
};
