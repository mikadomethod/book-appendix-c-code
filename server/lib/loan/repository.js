var fs = require('fs');

var LOAN_DIR = 'loans/';

var repo = {
    toDisk : function(application, id) {
	application.approved = false;
	application.applicationNo = id;
	fs.writeFile(LOAN_DIR + id + '.data', 
		     JSON.stringify(application),
		     function(err) {
			 if (err) {
			     throw err;
			 } else {
			     console.log('Stored');
			 }
		     });
    },

    store : function (application, callback) {
	fs.readdir('loans/', repo.determineNextId(application, callback, repo));
    },

    determineNextId : function(application, callback, repo) {
	return function(err, data) {
	    if (err) {
		throw err;
	    } else {
		var id = data.length + 1;
		repo.toDisk(application, id);
		callback(JSON.stringify({ticketId: id}));
	    }
	}
    },


    approve : function(ticketId, callback) {
	fs.readFile(
	    LOAN_DIR + ticketId + '.data', 
	    function(err, data) {
		if (err) {
		    throw err;
		} else {
		    var application = JSON.parse(data);
		    application.approved = true;
		    fs.writeFile(
			LOAN_DIR + application.applicationNo + '.data',
			JSON.stringify(application),
			this.doneWriting);
		    callback(JSON.stringify(
			{ticketId: application.applicationNo}
		    ));
		}	 
	    });
    },

    fetch : function(ticketId, callback) {
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