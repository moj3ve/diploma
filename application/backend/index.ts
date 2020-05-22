import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as jwt from 'koa-jwt';

import ApiRouter from './api/';


const app = new Koa();

// Configure koa
app.use(logger());
app.use(json());
app.use(bodyParser());
app.use(jwt({
	secret: "SUPER_SECRET_KEY-772f30db20930571b358c089cef2fc0d"
}));


// Apply routes
app.use(ApiRouter.routes()).use(ApiRouter.allowedMethods());


// Run server
app.listen(8000, () => {
	console.log("Hello World");
});

