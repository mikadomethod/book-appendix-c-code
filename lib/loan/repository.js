var fs = require('fs');

var repo = {
    store : function(application) {
	console.log('Storing that mutha');
	var files = fs.readdir('loans', function(err, list) {
	    console.log(list);	    
	});

    },


    fetch : function(ticketId) {
	console.log('Fetching ' + ticketId);
	return {'id' : ticketId};
    }

};

module.exports = repo;