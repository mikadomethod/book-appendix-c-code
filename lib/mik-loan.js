/*
 * mik-loan
 * https://github.com/ellnestam/mik-loan
 *
 * Copyright (c) 2013 Ola Ellnestam
 * Licensed under the MIT license.
 */

'use strict';

var url = require('url');
var http = require('http');
var repository = require('./loan/repository.js');

var APPLICATION = "apply";
var FETCH = "fetch";
var TICKET_ID = "ticketId";
var APPROVE = "approve";

var srv = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if (query.action === 'apply') {
	var application = {amount: query['amount'],
			   contact: query['contact'],
			   applicationNo: 2 
			  };
	repository.store(application, function printTicket(ticket) {
	    res.end(ticket + '\n');
	});

    } else if (query.action === 'fetch') {
	var ticketId = query[TICKET_ID];
        repository.fetch(ticketId, function printFetched(data) {
	    console.log('D2: ' + data);
	    res.end(data + '\n');
	});
	return;
    } else if (query.action === 'approve') {
        res.end(approveLoan(query[TICKET_ID]));
	return;
    }

    res.end('Incorrect parameters provided\n');
}).listen(8080);

function approveLoan(ticketId) {
    return 'Approving ' + ticketId + '\n';;
};

function fetchLoanInfo(ticketId) {
    return JSON.stringify(repository.fetch(ticketId)) + '\n';
}

/* console.log('Storing that mutha');
var files = fs.readdir('loans', function(err, list) {
    console.log(list);
    
});
console.log(files); */



