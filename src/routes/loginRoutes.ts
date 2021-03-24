import { Router } from 'express';
import { loginController, loginPageController } from '../controllers/loginController'

const router = Router();

router.route('/login')
    .get(loginPageController)
    .post(loginController);


export default router;

