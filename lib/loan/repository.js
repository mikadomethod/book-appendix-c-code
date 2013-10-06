var fs = require('fs');
var server = require('../mik-loan.js');

var LOAN_DIR = 'loans/';

var repo = {
    toDisk : function(application, callback, id) {
	application.approved = false;
	application.applicationNo = id;
	fs.writeFile(LOAN_DIR + id + '.data', 
		     JSON.stringify(application),
		     this.doneWriting);
    },

    doneWriting : function(err) {
	if (err) {
	    throw err;
	} else {
	    console.log('Stored');
	}
    },

    approveLoan : function(ticketId, callback) {
	fs.readFile(LOAN_DIR + ticketId + '.data', 
		    function(err, data) {
			if (err) {
			    throw err;
			} else {
			    var application = JSON.parse(data);
			    application.approved = true;
			    fs.writeFile(LOAN_DIR + application.applicationNo + '.data', 
					 JSON.stringify(application),
					 this.doneWriting);
			    callback(JSON.stringify({ticketId: application.applicationNo}));
			}	 
		    });
    },

    fetch : function(ticketId, callback) {
	console.log(server);
	fs.readFile(LOAN_DIR + ticketId + '.data', 
		    function(err, data) {
			if (err) {
			    throw err;
			} else {
			    callback(data);
			}	 
		    });
    },
};

module.exports = repo;