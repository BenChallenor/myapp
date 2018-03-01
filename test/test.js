// var chai = require('chai');
// var expect = chai.expect;
// var app = '/../app.js';
var Browser = require('zombie');
var url = 'http://localhost:3000';
var browser = new Browser();

describe('Hello', function() {
  // before(function() {
  //   this.server = http.createServer(app).listen(3000);
  //   this.browser = new Browser({
  //     site: 'http://localhost:3000'
  //   });

    it("should contain Hello Ben!", function(next) {
       browser.visit(url, function(err) {
           browser.assert.text('title', 'welcome to brains');
           // expect(browser.query("input[value='Login']")).toBeDefined();
           next();
       });
  });
});
// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });
// process.env.NODE_ENV = 'test';
//
// describe('contact page', function() {
//   it('should show contact a form');
//   it('should refuse empty submissions');
//   it('should refuse partial submissions');
//   it('should keep values on partial submissions');
//   it('should refuse invalid emails');
//   it('should accept complete submissions');
// });
// var http = require("http");
//
//
// process.env.NODE_ENV = 'test';
//
// var app = require('../app');
// // var request = require("supertest").agent(app.listen());
//
// describe('contact page', function() {
//   before(function() {
//     this.server = http.createServer(app).listen(3000);
//   });
//
//   it("has a nice welcoming message", function (done) {
//         request
//             .get("/")
//             .expect("Hello Ben!")
//             .end(done);
//
//
//   // after(function(done) {
//   //   this.server.close(done);
//   });
// });
