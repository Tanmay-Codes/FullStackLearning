const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("custom", (message, user)=>{
    console.log(`\n${user} : ${message}`);
} );

emitter.emit("custom","Hi there i am falana", "Computer");

process.stdin.on("data", (data)=>{
    const input = data.toString().trim();

    // This is interesting that here declating the let variable is not working, but with const it is working.
    // let input = data.toString().trim();
    
    if (input==='exit'){
        emitter.emit("custom", "Goodbye!", "Computer");
        process.exit();
    }
    emitter.emit("custom", data.toString().trim(), "Terminal");
    console.log(data[0], data[1], data[2], data[3], data);
});

