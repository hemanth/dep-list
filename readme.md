# dep-list [![Build Status](https://travis-ci.org/hemanth/dep-list.svg?branch=master)](https://travis-ci.org/hemanth/dep-list)

> Get all the dependencies for a node module.


## Install

```
$ npm install --save dep-list
```


## Usage

```js
var depList = require('dep-list');

depList('yo', function(err, data){
	if(!data) console.log(data)
});

/*
{ dependencies:
   [ 'array-uniq',
     'async',
     'chalk',
     'configstore',
     'cross-spawn',
     'figures',
     'findup',
     'fullname',
     'got',
     'humanize-string',
     'inquirer',
     'insight',
     'lodash',
     'meow',
     'npm-keyword',
     'opn',
     'package-json',
     'repeating',
     'root-check',
     'sort-on',
     'string-length',
     'titleize',
     'update-notifier',
     'user-home',
     'yeoman-character',
     'yeoman-doctor',
     'yeoman-environment',
     'yosay' ],
  devDependencies:
   [ 'jshint',
     'mocha',
     'mockery',
     'nock',
     'nsp',
     'proxyquire',
     'registry-url',
     'sinon' ] }
*/
```


## API

### depList(input, cb)

#### input

*Required*  
Type: `file path` or `string`

Module name or path to `package.json`

#### cb
*Required*  

Callback function.


## License

MIT © [Hemanth.HM](http://h3manth.com)
