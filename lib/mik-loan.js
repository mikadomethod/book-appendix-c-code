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

exports.awesome = function() {
  return 'awesome';
};

var srv = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query);

    if (query.action === 'apply') {
	var application = {amount: query['amount'],
			   contact: query['contact']};
	var ticket = repository.store(application);
	res.end(ticket);
    } else if (query.action === 'fetch') {
        res.end(fetchLoanInfo(query[TICKET_ID]));
    } else if (query.action === 'approve') {
        res.end(approveLoan(query[TICKET_ID]));
    }

    res.end('Incorrect parameters provided\n');
}).listen(8080);

function approveLoan(ticketId) {
    return 'Approving ' + ticketId + '\n';;
};

function fetchLoanInfo(ticketId) {
    return JSON.stringify(repository.fetch(ticketId)) + '\n';
}


