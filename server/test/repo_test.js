'use strict';

var repo = require('../lib/loan/repository.js');

exports['Repository'] = {
    setUp: function(done) {
	done();
    },
    'loanId': function(test) {

	var savedToDisk = false;
	var mockRepo = {
	    toDisk : function() {
		savedToDisk = true;
	    }
	};
	
	var actualResult;
	var callback = function(data) {
	    actualResult = data;
	}

	var generateNextId = repo.determineNextId(null, callback, mockRepo);
	generateNextId(null, ['1.data', "2.data"]);
	test.equals('{"ticketId":3}', actualResult);
	test.equals(true, savedToDisk);
	test.done();
    },
};
