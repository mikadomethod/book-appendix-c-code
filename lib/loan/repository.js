var fs = require('fs');

var LOAN_DIR = 'loans/';

var repo = {
    store : function(application, callback) {
	fs.readdir('loans', function doneReading(err, data) {
	    if (err) {
		throw err;
	    } else {
		var id = data.length + 1;
		application.approved = false;
		application.applicationNo = id;
		fs.writeFile(LOAN_DIR + id + '.data', 
			     JSON.stringify(application),
			     this.doneWriting);
		
		callback(JSON.stringify({ticketId: id}));
	    }
	});
    },

    doneWriting : function(err) {
	if (err) {
	    console.log("BONK!");
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
			    fs.writeFile('loans/' + application.applicationNo + '.data', 
					 JSON.stringify(application),
					 this.doneWriting);
			    callback(JSON.stringify({ticketId: application.applicationNo}));
			}	 
		    }
		   );
	

    },

    fetch : function(ticketId, callback) {
	fs.readFile(LOAN_DIR + ticketId + '.data', 
		    function(err, data) {
			if (err) {
			    throw err;
			} else {
			    callback(data);
			}	 
		    }
		   );
    },
};

module.exports = repo;