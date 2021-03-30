import { Router } from 'express';
import { loginController, logoutController, loginPageController } from '../controllers/authController'

const router = Router();

router.route('/login')
    .get(loginPageController)
    .post(loginController);

router.route('/logout')
    .post(logoutController)


export default router;

