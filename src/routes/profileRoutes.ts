import { Router } from 'express';
import { profilePageController } from '../controllers/profileController'

const router = Router();

router.route('/profile')
    .get(profilePageController)


export default router;

