module.exports = require('../lib/expressobdd')({
	'group one': {
		'it should do x': function() {
			var x = 2;
			x.should.eql(2);
		},

		'it should do y': function() {
			var y = 3;
			y.should.eql(3);
		},

		'group one point 2': {
			'it should do w': function() {
				var z = 5;
				z.should.eql(5);
			},
		},
	},
	'it should do z': function() {
		var z = 4;
		z.should.eql(4);
	},
});
