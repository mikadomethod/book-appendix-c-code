'use strict';

var server = require('../lib/loan-server.js');

exports['Loan Server'] = {
    setUp: function(done) {
	done();
    },
    'apply': function(test) {

	var wasCalled = false;
	var actualApplication;
	var repo = {
	    nextId : function(data, callback) {
		actualApplication = data;
	    }
	};
	

	var response = {
	    writeHead : function() {},
	    end : function(data) {
		wasCalled = true;
	    }
	};
	var request = {
	    url : '?action=apply&amount=1000&contact=donald@ducks.burg'
	};

	var launcher = server.launch(repo, server.serveResult(response));

	launcher(request, response);
	test.equals(actualApplication.amount, 1000);
	test.equals(actualApplication.contact, 'donald@ducks.burg');	
	test.done();
    },
};
