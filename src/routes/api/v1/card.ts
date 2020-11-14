import { Router } from 'express';

import { get, write } from '../../../controllers/card';
import auth from '../../../middleware/auth';

const router = Router();

router.get('/:page', get);
router.post('/', auth, write);

export default router;
