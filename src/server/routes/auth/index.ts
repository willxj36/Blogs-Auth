import * as express from 'express';
const router = express.Router();
import loginRouter from './login';

router.use('/login', loginRouter);

export default router;