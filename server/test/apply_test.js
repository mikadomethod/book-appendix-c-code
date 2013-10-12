'use strict';

var server = require('../lib/loan-server.js');

exports['Loan Server'] = {
    setUp: function(done) {
	done();
    },
    'apply': function(test) {

	var wasCalled = false;
	var repo = {};
	

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

	// launcher(request, response);
	// test.equals(true, wasCalled);
	test.done();
    },
};
