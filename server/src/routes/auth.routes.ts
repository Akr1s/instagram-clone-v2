import { Router } from 'express';
import { checkDuplicateEmail, checkDuplicateUsername } from '../middlewares/verifySignUp';
import authController from '../controllers/auth.controller';

const router: Router = Router();

router.post('/signup', [checkDuplicateEmail, checkDuplicateUsername], authController.signUp);
router.post('/signin', authController.signIn);
router.post('/signout', authController.singOut);

export default router;
