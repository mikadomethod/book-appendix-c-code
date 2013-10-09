'use strict';

var loan_server = require('../lib/loan-server.js');

exports['Loan Server'] = {
    setUp: function(done) {
	done();
    },
    'apply': function(test) {
	var res = {
	    writeHead : function() {
	    },
	    end : function(data) {
		test.equals('Called\n', data);
	    }
	};

	var repo = {
	    fetch : function(ticketId, callback) {
		test.equals(1, ticketId);
		callback('Called');
	    }
	};
	var launcher = loan_server.launch(repo);
	var result;
	var req = {
	    url : '?action=fetch&ticketId=1'
	};
	
	launcher(req, res);
	test.done();
    },
};
