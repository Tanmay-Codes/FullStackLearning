const fs = require('fs');

let files = fs.readdirSync("./");

// This raeddirSync will actually shows the list of the files that are actually present in the director
// but this request is done synchronously and may block the process below
console.log(files);

console.log("Not this will run");

// There is another method of calloing this Asychronously

fs.readdir("./", function(err, files) {
    if (err) throw  err;
    console.log(files);
});

console.log("now this will run before the listing");