import * as express from 'express';
import * as passport from 'passport';
import { RequestHandler } from 'express-serve-static-core';
import blogRouter from './blogs';
import authorRouter from './authors';
import tagRouter from './tags';
import blogTagRouter from './blogtags';

const router = express.Router();

const isAdmin: RequestHandler = (req: any, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.use((req: any, res, next) => {
    passport.authenticate('bearer', {session: false}, (err, user, info) => {
        if(user) req.user = user;
        return next();
    })(req, res, next)
});

router.use('/blogs', blogRouter);
router.use('/authors', authorRouter);
router.use('/tags', tagRouter);
router.use('/blogtags', blogTagRouter);

export default router;