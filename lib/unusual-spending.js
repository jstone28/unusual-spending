var fetchPayments = require( './fetch-payments' );
var checkSpending = require( './check-spending' );
var emailNotify = require( './email-notification' );

module.exports = function( userId ) {
	var payments = fetchPayments( userId ),
		spending = checkSpending( payments );

	emailNotify( userId, spending );
};