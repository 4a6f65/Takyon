// This file is not transpiled, so must use CommonJS and ES5

//Refuster babel to transpile before our tests are run
require('babel-register')();

//Disable webpack features that Mocha does not understand
require.extensions['.css'] = function(){};