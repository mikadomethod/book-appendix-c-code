var fs = require('fs');

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


    fetch : function(ticketId) {
	console.log('Fetching ' + ticketId);
	return {'id' : ticketId};
    }

};

module.exports = repo;