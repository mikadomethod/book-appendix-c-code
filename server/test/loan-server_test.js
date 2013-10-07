'use strict';

var loan_server = require('../lib/loan-server.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
    setUp: function(done) {
	// setup here
	done();
    },
    'no args': function(test) {
	test.expect(1);
	// tests here
	var server = loan_server.start();
	console.log(server);
	test.equal(server(), 'awesome', 'should be awesome.');
	test.done();
    },
};
