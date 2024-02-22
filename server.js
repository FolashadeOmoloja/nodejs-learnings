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





// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

//* filename and diretory name and extension name *//
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename)) //extension name
// //* results *//
// C:\Users\HP\Desktop\front end dev\nodejs -folder
// C:\Users\HP\Desktop\front end dev\nodejs\server.js -file
// C:\Users\HP\Desktop\front end dev\nodejs
// server.js
// .js -language extension

// console.log(path.parse(__filename))
//Result

// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\HP\\Desktop\\front end dev\\nodejs',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
//   }  you get everthing