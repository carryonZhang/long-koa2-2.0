'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _controllerInit = require('./controller/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable fun-call-spacing */
/**
 * Created by long-mac on 2017/4/5.
 */
var app = exports.app = new _koa2.default();
app.use((0, _koaViews2.default)(_path2.default.join(__dirname, './views'), {
    map: {
        html: 'swig'
    }
}));
app.use((0, _koaStatic2.default)(_path2.default.join(__dirname, '../build')));

_controllerInit2.default.getAllrouters(app, _koaSimpleRouter2.default);

app.listen(8000, function () {
    console.log('Now it is listening at: ', 8000);
});

console.log('app.js中的app对象', app);