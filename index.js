'use strict';
var packageJson = require('package-json');
var statSync = require('fs').statSync;
var R = require('ramda');
var parsePackage = function(data) {
	var devDependencies = R.keys(R.prop(['devDependencies'],data)).sort();
	var dependencies = R.keys(R.prop(['dependencies'],data)).sort();
	return {
		dependencies: dependencies,
		devDependencies: devDependencies
	}
}
module.exports = function (input, opts) {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}
	opts = opts || {};
	try {
		if (statSync(input).isFile()) {
			cb(null, parsePackage(require(__dirname + "/" + input)));
		}
	} catch(err) {
		return packageJson(input, 'latest')
		.then(data => parsePackage(data))
	}
};
