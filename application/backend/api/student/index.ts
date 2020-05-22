import * as Router from 'koa-router';


const studentsRouter = new Router({ prefix: "/student" });

studentsRouter.get('/get', async (ctx, next) => {
	ctx.body = { "message": "Hello world!" };
	await next();
});


export default studentsRouter;
