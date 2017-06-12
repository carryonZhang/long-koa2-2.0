/* eslint-disable fun-call-spacing */
/**
 * Created by long-mac on 2017/4/5.
 */
import Koa from 'koa';
import router from 'koa-simple-router';
import views from 'koa-views';
import serve from 'koa-static';
import path from 'path';
import controller from './controller/controllerInit';
import errorHandler from './controller/errorHandler';

export const app = new Koa();
app.use(views(path.join(__dirname, './views'), {
    map: {
        html: 'swig',
    },
}));
app.use(serve(path.join(__dirname, '../build')));

errorHandler.error(app);

controller.getAllrouters(app, router);

app.listen(8000, () => {
    console.log('Now it is listening at: ', 8000);
});

console.log('app.js中的app对象', app);