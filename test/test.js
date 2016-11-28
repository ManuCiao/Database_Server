var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server");
var should = chai.should();

chai.use(chaiHttp);


describe('Database server', function() {

    describe('set the route', function() {

        var setUrl = "http://localhost:4000/set?somekey=somevalue";

        it('returns status 200', function(done) {
            this.timeout(300);
            setTimeout(done, 250);
            chai.request(setUrl, function(err, res, body) {
                res.should.have.status(200);
                done();
            });
        });

        it('store key-value into a hash', function(done) {
            this.timeout(500);
            setTimeout(done, 300);
            chai.request(setUrl, function(err, res, body) {
                res.body.should.be.eql('{"somekey":"somevalue"}');
                done();
            });
        });
    });


    describe('get the route', function() {
        var setUrl = "http://localhost:4000/set?somekey=somevalue";
        var getUrl = "http://localhost:4000/get?key=somekey";

        before(function() {
            chai.request(setUrl);
        });

        it('returns status 200', function(done) {
            this.timeout(300);
            setTimeout(done, 250);
            chai.request(getUrl, function(err, res, body) {
                res.should.have.status(200);
                done();
            });
        });

        it('returns the value of the given key', function(done) {
            this.timeout(300);
            setTimeout(done, 250);
            chai.request(getUrl, function(err, res, body) {
                res.body.should.be.eql('The value of key is somekey');
                done();
            });
        });
    });

});
