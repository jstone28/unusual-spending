var assert = require( 'assert' );
var subject = require( '../../lib/hello-user' );

module.exports = {
	BobTest : function() {
		var name = 'Bob';
		var result = subject.greeting( name );
		assert.equal( result, 'Hello, Bob!' );
	},
	MyFriendUndefinedTest : function() {
		var result = subject.greeting();
		assert.equal( result, 'Hello, my friend!' );
	},
	MyFriendEmptyStringTest : function() {
		var result = subject.greeting( '' );
		assert.equal( result, 'Hello, my friend!' );
	},
	MyFriendEmptyStringWithSpaceTest : function() {
		var result = subject.greeting( ' ' );
		assert.equal( result, 'Hello, my friend!' );
	},
	JerryUppercaseTest : function() {
		var result = subject.greeting( 'JERRY' );
		assert.equal( result, 'HELLO, JERRY!' );
	},
	ListGreetingOfTwoTest : function() {
		var listOfNames = [ 'Jill', 'Jane' ];
		var result = subject.greeting( listOfNames );
		assert.equal( result, 'Hello, Jill and Jane' );
	},
	ListGreetingOfThreeTest : function() {
		var listOfNames = [ 'Amy', 'Brian', 'Charlotte' ];
		var result = subject.greeting( listOfNames );
		assert.equal( result, 'Hello, Amy, Brian, and Charlotte' );
	},
	ListGreetingWithCAPSTest : function() {
		var listOfNames = [ 'Amy', 'BRIAN', 'Charlotte' ];
		var result = subject.greeting( listOfNames );
		assert.equal( result, 'Hello, Amy and Charlotte. AND HELLO BRIAN!' );
	}
};