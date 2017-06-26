var assert = require('assert');

module.exports = function() {
	var subject = require('../../lib/fetch-payments'),
		userId = 42,
		result;

	result = subject(userId);

	assert(result, 'some payments');

};