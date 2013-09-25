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

exports.awesome = function() {
  return 'awesome';
};

var srv = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query);

    if (query) {
	res.end('Yep!\n');
	console.log('arne');
    }


    res.end('Unrecognized command\n');
}).listen(8080);

