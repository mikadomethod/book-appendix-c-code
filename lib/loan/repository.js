var fs = require('fs');

var content;

var repo = {
    store : function(application, callback) {
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

    fetch : function(ticketId, callback) {
	fs.readFile('loans/' + ticketId + '.data', this.doneReading);
	callback(content);
    },

    doneReading : function(err, data) {
	if (err) {
	    throw err;
	} else {
	    content = data;
	    console.log('D ' + data);
	}	 
    }
    
};

module.exports = repo;