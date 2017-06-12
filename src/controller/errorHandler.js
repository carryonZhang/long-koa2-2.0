/**
 * Created by shaolong on 2017/6/12.
 */
'use strict';
let errorHandler = {
	error(app) {
		app.use(async(ctx, next) => {
			await next();
			if (404 != ctx.status) return;
			console.log(ctx.url, '404页面');
			ctx.status = 404;
			await ctx.render('error/pages/404');
		});
		app.use(async(ctx, next) => {
			try {
				await next();
			} catch (err) {
				console.error(new Error(err));
				ctx.status = err.status || 500;
				await ctx.render('error/pages/500');
			}
		});
	}
};
export default errorHandler;