import * as Router from 'koa-router';

import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';


const authRouter = new Router({ prefix: "/auth" });

authRouter.post('/login', async (ctx, next) => {
	ctx.body = {
		"token": jwt.sign({ id: 1 }, SECRET_KEY),
	};
	await next();
});

export default authRouter;
