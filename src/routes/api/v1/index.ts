import { Router } from 'express';

import auth from './auth';
import card from './card';

const router = Router();

router.use('/auth', auth);
router.use('/card', card);

export default router;
