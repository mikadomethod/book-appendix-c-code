var fs = require('fs');

var content;

var repo = {
    store : function(application, callback) {
	application.approved = false;
	fs.writeFile('loans/' + application.applicationNo + '.data', 
		     JSON.stringify(application),
		     this.doneWriting);
	
	callback(JSON.stringify({ticketId: application.applicationNo}));
    },

    doneWriting : function(err) {
	if (err) {
	    console.log("BONK!");
	} else {
	    console.log('Stored');
	}
    },

    approveLoan : function(ticketId, callback) {
	fs.readFile('loans/' + ticketId + '.data', 
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
	fs.readFile('loans/' + ticketId + '.data', 
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