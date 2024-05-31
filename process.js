const command = process.argv[2]


// if (command === 'add'){
//     console.log('adding a note')
// } else if (command === 'remove' || command === 'delete'){
//     console.log('removing note')
// }

const yargs = require('yargs')
const { add } = require('./math')
yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function(){
        console.log('adding a new note')
    } 
})

console.log(yargs.argv)
// when you run this code

// node process.js add

// adding a new note: This output comes from the handler function of the add command.
// { _: [ 'add' ] }: An array containing the add command, indicating that the add command was provided.
// '$0': 'script.js': The name of the executed script.


// node process.js
// { _: [], '$0': 'process.js' } 
// Explanation:

// { _: [] }: An empty array indicating that no command was provided.
// '$0': 'script.js': The name of the executed script.


// Summary
// require('yargs'): Imports the yargs module.
// yargs.version('1.1.0'): Sets the version of the yargs instance.
// yargs.command: Defines a new command with a name, description, and handler function.
// yargs.argv: Parses the command-line arguments and outputs them.
// This script sets up a basic command-line interface (CLI) using yargs to handle commands and arguments, demonstrating how to define and handle a simple command.