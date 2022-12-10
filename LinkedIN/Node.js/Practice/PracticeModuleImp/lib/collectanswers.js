const readline = require('readline');
const {EventEmitter} = require('events');
// notice this is another way of importing the event emitter, before we have imorted it as events first and the created the events.EventEmitter
// we cam directly import EventEmitter using curly braces this way from events

// creating a weapper of readline that creates input and output, so creating a interface of that for process.stdin and process.stdout

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}
);

// Noitice here we are exporting the module with module.exports the function which is being used in another file emitPractice.js
// This way we are able to reuse the already written module again and again.



module.exports = (ques, done) => {
    let answers = [];
    const emitter = new EventEmitter();

// notice every time we create an EventEmitter we create it with a new prefix as we want to show that we are creating a new event.
// Reason why emitter we have imported here is because we want to try a functionaliy to raise an event every time user answers a question
    const quesans = answer =>{
        answers.push(answer.trim());
        emitter.emit('answer',answer)
        if (answers.length < ques.length){
            rl.question(ques[answers.length], quesans);
        }
        else{
            return done(answers);
        }
    }
    rl.question(ques[0], quesans);
    return emitter;
    //  this is return so that we can use it when this module is imported in another file
}