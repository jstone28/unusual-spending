module.exports = function() {
	var fetchPayments = td.replace( '../../lib/fetch-payments' ),
		checkSpending = td.replace( '../../lib/check-spending' ),
		emailNotify = td.replace( '../../lib/email-notification' ),
		//call real class
		subject = require( '../../lib/unusual-spending' ),
		userId = 42;

	td.when( fetchPayments( userId ) ).thenReturn( 'some payments' );
	td.when( checkSpending( 'some payments' ) ).thenReturn( 'unusual spending' );

	subject( userId );

	td.verify( emailNotify( userId, 'unusual spending' ) );
};
