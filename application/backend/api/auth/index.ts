import * as Router from 'koa-router';

import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config';

import { sequelize, Student } from '../../database/'


const authRouter = new Router({ prefix: "/auth" });

authRouter.post('/login', async (ctx, next) => {
	const student = await sequelize.models.student.findOne({
		where: { email: ctx.request.body.email },
		attributes: [ 'id' ]
	});

	ctx.assert(student, 403);

	const studentJson = student.toJSON();
	ctx.body = {
		"token": jwt.sign({ ...studentJson }, SECRET_KEY),
	};

	await next();
});

export default authRouter;
