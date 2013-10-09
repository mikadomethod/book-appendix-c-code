'use strict';

var url = require('url');
var http = require('http');
var fs = require('fs');

var repository = require('./loan/repository.js');

var APPLICATION = "apply";
var FETCH = "fetch";
var TICKET_ID = "ticketId";
var APPROVE = "approve";

var srv = http.createServer(function (req, res) {

    var nextId = function(application, callback) {
	fs.readdir('loans/', function determineNextId(err, data) {
	    if (err) {
		throw err;
	    } else {
		var id = data.length + 1;
		repository.toDisk(application, callback, id);
		callback(JSON.stringify({ticketId: id}));
	    }
	});
    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if (query.action === 'apply') {
	var application = {amount: query['amount'],
			   contact: query['contact'],
			  };
	nextId(application, function printTicket(ticket) {
	    res.end(ticket + '\n');
	});
	return;

    } else if (query.action === 'fetch') {
	var ticketId = query[TICKET_ID];
        repository.fetch(
	    ticketId, 
	    function printFetched(application) {
		res.end(application + '\n');
	    });
	return;
    } else if (query.action === 'approve') {
        repository.approveLoan(
	    query[TICKET_ID], 
	    function printTicketAfterApprove(ticket) {
		res.end(ticket + '\n');
	    });
	return;
    }

    res.end('Incorrect parameters provided\n');
}).listen(8080);
