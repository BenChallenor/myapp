// var chai = require('chai');
// var expect = chai.expect;
// var app = '/../app.js';
var Browser = require('zombie');
Browser.localhost('localhost.com', 3000);
var browser = new Browser();

describe('Hello', function() {
    it("should contain Hello Ben!", function(next) {
       browser.visit('/', function() {
         // console.log(browser.assert.text)
           browser.assert.text('title','welcome to brains');
           next();
       });
  });
});
