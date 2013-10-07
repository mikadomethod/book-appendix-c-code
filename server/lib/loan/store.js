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

