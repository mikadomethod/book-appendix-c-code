'use strict';

var loan_server = require('../lib/loan-server.js');

exports['awesome'] = {
    setUp: function(done) {
	// setup here
	done();
    },
    'no args': function(test) {
	test.expect(1);
	// tests here
	var server = loan_server.start();
	console.log(server);
	test.equal(server(), 'awesome', 'should be awesome.');
	test.done();
    },
};
