var HelloUser = function() {
};

HelloUser.prototype.greeting = function( name ) {
	var hello = 'Hello, ',
		line = [],
		shout = '',
		comma = ',';

	//is not an array
	if ( !(name instanceof Array) ) {
		if ( !name || name.trim().length == 0 ) {
			name = 'my friend'
		}
		if ( name == name.toUpperCase() ) {
			hello = 'HELLO, '
		}
		return hello + name + '!';
	} else {
		if ( name.length == 2 ) {
			return hello + name.join( ' and ' );
		}
		name.forEach( function( item, index ) {
			if ( item == item.toUpperCase() ) {
				shout+= '. AND HELLO ' + item + '!';
				comma = '';
			} else {
				line.push( item );
			}
		} );

		var last = comma + ' and ' + line.pop();
		return hello + line.join( ', ' ) + last + shout;
		// return hello + line.join( ', ' ) + ', and ' + last + shout;
	}
};


module.exports = new HelloUser();