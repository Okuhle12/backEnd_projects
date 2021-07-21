
var figlet = require('figlet');

figlet('Hello Xola!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data) 


 

const chalk = require('chalk');
// //for changing colour
// //import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)
});