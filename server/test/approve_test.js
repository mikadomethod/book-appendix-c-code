'use strict';

var server = require('../lib/loan-server.js');

exports['Loan Server'] = {
    setUp: function(done) {
	done();
    },
    'approve': function(test) {

	var wasCalled = false;
	var actualTicketId;
	var repo = {
	    approve : function(ticketId, callback) {
		actualTicketId = ticketId;
	    },
	    
	    store : function() {
	    }
	};
	

	var response = {
	    writeHead : function() {},
	    end : function(data) {
		wasCalled = true;
	    }
	};
	var request = {
	    url : '?action=approve&ticketId=3'
	};

	var launcher = server.launch(repo, server.serveResult(response));
	launcher(request, response);
	
	test.equals(actualTicketId, 3);
	test.equals(true, wasCalled);
	test.done();
    },
};
