// example of including the path in node js

const path = require('path');

console.log(`The name of the file in which node is written is ${path.basename(__filename)}`);
// The name of the file in which node is written is practice.js
let Myname = "Tanmay"

console.log(`Hello ${Myname}`);

console.log(__filename);
// D:\LinkedIN\Node.js\Practice\practice.js
console.log(__dirname);
// D:\LinkedIN\Node.js\Practice

//******PROCESS************************** */

// console.log(process.argv);

function grab(flag){
    const i = process.argv.indexOf(flag) + 1;
    return (process.argv[i]);
}
console.log(grab("--greeting"));
console.log(grab("--user"));

