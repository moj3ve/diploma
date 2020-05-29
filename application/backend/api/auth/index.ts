import * as Router from 'koa-router';

import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';

import { sequelize } from '../../database/'

import { generateTokenForStudent } from '../../services/auth/';


const authRouter = new Router({ prefix: "/auth" });

authRouter.post('/login', async (ctx, next) => {
	const token = generateTokenForStudent(ctx.request.body.email, ctx.request.body.password);

	// const student = await sequelize.models.student.findOne({
	// 	where: { email: ctx.request.body.email },
	// 	attributes: [ 'id', 'password' ]
	// });

	// ctx.assert(student, 404);
	// ctx.assert(student.password === ctx.request.body.password, 404);

	// const token = jwt.sign({
	// 	id: student.id
	// }, SECRET_KEY);

	ctx.assert(token, 404);
	
	ctx.body = {
		"token": token,
	};

	await next();
});

export default authRouter;
