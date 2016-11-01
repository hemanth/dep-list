'use strict';
var assert = require('assert');
var depList = require('./');

it('should return dep list for a module name', function (done) {
	depList('yo')
	.then(data => {
		assert.strictEqual(data.dependencies[0],'array-uniq');
		assert.strictEqual(data.devDependencies[0],'jshint');
	});
	done();
});

it('should return dep list for a given file', function (done) {
	depList('./fixture.json')
	.then(data => {
		assert.strictEqual(data.dependencies[0],'array-uniq');
		assert.strictEqual(data.devDependencies[0],'jshint');
	});
	done();
});
