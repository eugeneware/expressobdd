# Adds simple BDD to the expresso TDD framework

This project adds a simple extension to the expresso framework which translates a nested "describe"/"it should" structure into a flattened object that expresso will run.

**expressobdd** includes the 'should.js' framework so you get access to the BDD 'should' style assertions without needing to explicitly include it.

# Usage

Here's an example of how to use **expessobdd** in a file in 'test/mytest.js':

	module.exports = require('expressobdd')({
		'a test group': {
			'test a': function() {
				var x = 3;
				x.should.eql(3);
			},

			'test b': function() {
				var y = 4;
				y.should.eql(4);
			},

			'another group': {
				'test c': function() {
					var x = 3;
					x.should.eql(3);
				},

				'test d': function() {
					var y = 4;
					y.should.eql(4);
				},
			},
		},

		'it should be a simple test': function() {
			var x = 2;
			x.should.eql(2);
		},
	});

Then you can run the test above by:
	$ expresso

# Installation

**expressobdd** is made available through the npm package system. To install just:

	$ npm install expressobdd
