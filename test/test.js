const request = require('supertest');
const app = require('../app.js');
describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello world', done);
 });
});
