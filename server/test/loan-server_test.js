'use strict';

var loan_server = require('../lib/loan-server.js');

exports['Loan Server'] = {
    setUp: function(done) {
	done();
    },
    'apply': function(test) {
	var launcher = loan_server.launch();
	test.equal(launcher(), 'Test', 'Should return something');
	test.done();
    },
};
