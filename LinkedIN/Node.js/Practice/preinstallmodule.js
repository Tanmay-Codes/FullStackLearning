const path = require("path");
const utill = require("util");
const v8 = require("v8");
// above is the example how to import the pre loaded module in node.js

const dirUploads = path.join(__dirname,"this", "is", "added in the file", "name");
// above is the example how to join the file names

const testfile = path.join("Hello", "I am", "test");
console.log(testfile);
// note that file.join is just for joining the paths of the file, the strings can not be joined with this.
console.log(dirUploads);

utill.log(dirUploads);
utill.log(v8.getHeapCodeStatistics(__filename));