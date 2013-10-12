'use strict';

var repo = require('../lib/loan/repository.js');

exports['Repository'] = {
    setUp: function(done) {
	done();
    },
    'loanId': function(test) {

	repo.nextId();
	// test.equals(true, wasCalled);
	test.done();
    },
};
