import * as Router from 'koa-router';

import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';

import { sequelize, Student } from '../../database/'


const authRouter = new Router({ prefix: "/auth" });

authRouter.post('/login', async (ctx, next) => {
	const student = await sequelize.models.student.findOne({
		where: { email: ctx.request.body.email },
		attributes: [ 'id', 'password' ]
	});

	ctx.assert(student, 404);
	ctx.assert(student.password === ctx.request.body.password, 404);

	const studentJson = student.toJSON();
	ctx.body = {
		"token": jwt.sign({ ...studentJson }, SECRET_KEY),
	};

	await next();
});

export default authRouter;
