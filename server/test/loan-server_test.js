'use strict';

var loan_server = require('../lib/loan-server.js');

exports['Loan Server'] = {
    setUp: function(done) {
	done();
    },
    'apply': function(test) {
	var repo = {};
	var launcher = loan_server.launch(repo);
	var result;
	var req = {
	    url : '?action=fetch&ticketId=1'
	};
	var res = {
	    writeHead : function() {
	    },
	    end : function(data) {
		result = data;
	    }
	};
	
	launcher(req, res);
	test.equal(result, '{applicationNo : 1, amount : 10000, approved : false, contact : "donald@ducks.burg"}');
	test.done();
    },
};
