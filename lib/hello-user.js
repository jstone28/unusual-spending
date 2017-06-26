var HelloUser = function() {};

HelloUser.prototype.greeting = function( name ) {
	if ( name instanceof Array && name.length == 2 ) {
		var second = name[1].replace(/['"]+/g, '');
		return 'Hello, ' + name[0] + ' and ' + second + '.';
	} else if ( name instanceof Array && name.length > 2 ) {
		var shout = '';
		var line = [];
		var comma = ',';
		name.forEach( function( item ) {
			if (item == item.toUpperCase()) {
				shout = ' AND HELLO ' + item + '!';
				comma = ''
			} else {
				line.push( item );
			}
		});
		var last = comma + ' and ' + line.pop() + '.';
		return 'Hello, ' + line.join( ', ' ) + last + shout;
	} else if ( !name || name.trim().length == 0 ) {
		return 'Hello, my friend.';
	} else if ( name && name == name.toUpperCase() ) {
		return 'HELLO, ' + name + '!';
	} else {
		return 'Hello, ' + name + '.';
	}
};

module.exports = new HelloUser();
