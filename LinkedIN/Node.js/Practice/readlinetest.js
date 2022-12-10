const readline = require('readline');

// creating a weapper of readline that creates input and output, so creating a interface of that for process.stdin and process.stdout

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}
);

//now we will call a function that takes two arguments, first is a question and seconed is a function)

// rl.question("How are you?", answer=>{
//     console.log(answer);   
// });
// This is an example of just one question what if I have an array of question and I can log answers for that?

const ques = [
    "How are you?", "Where you live?", "What you learning?"
];

const collectAnswers = function(ques, done) {
    let answers = [];
    const quesans = answer =>{
        answers.push(answer.trim());
        if (answers.length < ques.length){
            rl.question(ques[answers.length], quesans);
        }
        else{
            return done(answers);
        }
    }
    rl.question(ques[0], quesans);
}

collectAnswers(ques, (answer)=>{
    console.log(`your answers are \n\n ${answer}`);
    process.exit();
});
