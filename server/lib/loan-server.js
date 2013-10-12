'use strict';

var url = require('url');
var http = require('http');
var fs = require('fs');

var repository = require('./loan/repository.js');

var APPLICATION = "apply";
var FETCH = "fetch";
var TICKET_ID = "ticketId";
var APPROVE = "approve";

var server = {

    serveResult : function(response) {
	return function printFetched(application) {
	    response.end(application + '\n');
	}
    },

    launch : function launcher(repo, returnResult) {
	return function (req, res) {

	    res.writeHead(200, {'Content-Type': 'application/json'});
	    var url_parts = url.parse(req.url, true);
	    var query = url_parts.query;
	    
	    if (query.action === 'apply') {
		var application = {amount: query['amount'],
				   contact: query['contact'],
				  };
		repo.store(application, returnResult(res));
		return;
		
	    } else if (query.action === 'fetch') {
		repo.fetch(query[TICKET_ID], returnResult(res));
		return;
	    } else if (query.action === 'approve') {
		repo.approve(query[TICKET_ID], returnResult(res));
		return;
	    }

	    res.end('Incorrect parameters provided\n');
	}
    }
}

var srv = http.createServer(server.launch(repository, server.serveResult)).listen(8080);

module.exports = server;