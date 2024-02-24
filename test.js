console.log('sup world')
//use node server to run it
//there is a global object instead of window object
// console.log(global)

//has common core modluless that we will explore
//commonjs modules used instead of es6 modules 
//imports
const os = require("os")
const path =  require('path')
const math = require('./math')
const {subtract, multiply, divide, add} = require('./math')

console.log(math.add(2,5))
console.log(subtract(10,5))
console.log(multiply(10,5))
console.log(divide(10,5))


console.log(math.add(2,5))
console.log(subtract(10,5))
console.log(multiply(10,5))
console.log(divide(10,5))
console.log(math.add(2,5))
console.log(subtract(10,5))
console.log(multiply(10,5))
console.log(divide(10,5))

