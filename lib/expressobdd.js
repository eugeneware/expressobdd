module.exports = function(tests) {
	var results = {};

	function parse(tests, prefix) {
		for (var i in tests) {
			if (tests[i] instanceof Function) {
				results[(prefix.length ? ('[' + prefix.join('][') + ']: ') : '') + i] = tests[i];
			} else {
				parse(tests[i], prefix.concat([i]));
			}
		}
	}

	parse(tests, []);

	console.log(results);

	return results;
};
