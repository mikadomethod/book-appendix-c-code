'use strict';

var server = require('../lib/loan-server.js');

exports['Loan Server'] = {
    setUp: function(done) {
	done();
    },
    'apply': function(test) {
	var wasCalled = false;

	var response = {
	    writeHead : function() {},
	    end : function(data) {
		wasCalled = true;
	    }
	};

	var repo = {
	    fetch : function(ticketId, callback) {
		test.equals(1, ticketId);
	    }
	};

	var request = {
	    url : '?action=fetch&ticketId=1'
	};

	var launcher = server.launch(repo, server.serveResult(response));

	launcher(request, response);
	test.equals(true, wasCalled);
	test.done();
    },
};
