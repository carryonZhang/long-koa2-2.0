/**
 * Created by shaolong on 2017/6/11.
 */
'use strict';
var superagent = require('supertest');
var app = require('../build/app');

console.log('引入的app', app)

function request() {
	// return superagent(app.listen());
	return superagent('http://localhost:8000');
	// return superagent(app);
}


describe('Routes', function () {
	describe('GET /', function () {
		it('should return 200', function (done) {
			request()
				.get('/')
				.expect(200, done);
		});
	});

	describe('GET /messages', function () {
		it('should return 404', function (done) {
			request()
				.get('/messages')
				.expect(404, done);
		});
	});
});