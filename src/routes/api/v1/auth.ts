import { Router } from 'express';

import {
  refresh, signin, signup, verify,
} from '../../../controllers/auth';

const router = Router();

router.post('/refresh', refresh);
router.post('/signin', signin);
router.post('/signup', signup);
router.post('/verify', verify);

export default router;
