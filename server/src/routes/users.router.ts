import { Router } from 'express';
import usersController from '../controllers/users.controller';
import { verifyToken } from '../middlewares/authJwt';

const router: Router = Router();

router.get('/me', [verifyToken], usersController.getCurrentUser);

export default router;
