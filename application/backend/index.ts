import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as jwt from 'koa-jwt';

import { SECRET_KEY } from './config';

import ApiRouter from './api/';


const app = new Koa();

// Configure koa
app.use(logger());
app.use(json());
app.use(bodyParser());

// Configure JWT
app.use(
	jwt({
		secret: SECRET_KEY,
	})
	.unless({
		path: [/^\/api\/auth/, "/"]
	})
);

app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = { error: err.message };
		// ctx.app.emit('error', err, ctx);
	}
});

// Apply routes
app.use(ApiRouter.routes()).use(ApiRouter.allowedMethods());


// Run server
app.listen(process.env.PORT || 8000, () => {
	console.log("App is started.");
});

