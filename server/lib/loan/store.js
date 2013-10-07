    store : function(application, callback) {
	var repo = this;
	fs.readdir(LOAN_DIR, function determineNextId(err, data) {
	    if (err) {
		throw err;
	    } else {
		var id = data.length + 1;
		repo.toDisk(application, callback, id);
		callback(JSON.stringify({ticketId: id}));
	    }
	});
    },
