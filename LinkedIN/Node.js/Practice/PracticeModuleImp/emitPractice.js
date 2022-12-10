const collectAnswers = require('./lib/collectanswers')
const ques = [
    "How are you?", "Where you live?", "What you learning?"
];


const answerEvents = collectAnswers(ques, (answer)=>{
    console.log(`your answers are \n\n ${answer}`);
    process.exit();
});

answerEvents.on('answer', answer=>{
    console.log(`Your answer is : ${answer} `)
})