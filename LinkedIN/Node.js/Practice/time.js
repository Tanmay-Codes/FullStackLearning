// working with node.js asynchronously by using timing fuctions.

const waitTime = 3000;
console.log(`setting a wait time of ${waitTime/1000} s delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

setTimeout(timerFinished, waitTime);

const waitItnerval = 500;
let currTime = 0;

// const incTime = ()=>{
//     currTime += waitItnerval;
//     console.log(`Waiting ${currTime/1000} seconds`);
// };

// another way of mentioning the delay in the form of percentage and without line changes

const incTime = ()=>{
    currTime += waitItnerval;
    let p = Math.floor((currTime / waitTime)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting...${p}`)
};

let interval = setInterval(incTime, waitItnerval);

