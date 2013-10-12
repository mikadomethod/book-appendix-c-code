'use strict';

var repo = require('../lib/loan/repository.js');
var server = require('../lib/loan_server.js');

exports['Repository'] = {
    setUp: function(done) {
	done();
    },
    'loanId': function(test) {

	server.nextId();

	launcher(request, response);
	// test.equals(true, wasCalled);
	test.done();
    },
};
