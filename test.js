// . How to export ./
// METHOD 1
const add = (a,b) => a + b
const subtract = (a,b) => a - b
const multiply = (a,b) => a * b
const divide= (a,b) => a / b

module.exports = {add, subtract, multiply, divide}

//Method 2
exports.add = (c,b) => a + b
exports.subtract = (a,d) => a - b
exports.multiply = (a,v) => a * b
exports.divide= (a,b) => a / b
exports.complicate= (a,b,c,d,e) => a / b*c*d+e
exports.divide= (a,b) => a / b


// you can either use module.exports or just straight away export