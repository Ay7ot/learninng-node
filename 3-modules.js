// Modules

const { john, peter } = require('./4-names');
const {sayHi} = require('./5-utils');
const { singlePerson, items } = require('./6-alternative-flavor')

require('./7-mind-grenade')
sayHi(john);
sayHi(peter);
sayHi('susan');
console.log( singlePerson, items );