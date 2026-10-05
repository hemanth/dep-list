#!/usr/bin/env node
'use strict';
var meow = ((m) => (m && m.default) ? m.default : m)(require('meow'));
var depList = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ dep-list [input]',
		'',
		'Examples',
		'  $ dep-list',
		'  unicorns & rainbows',
		'',
		'  $ dep-list ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(depList(cli.input[0] || 'unicorns'));
