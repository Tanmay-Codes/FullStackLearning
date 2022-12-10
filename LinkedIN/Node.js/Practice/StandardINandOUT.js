const questions = [
    "What is yout name?", "What language you speak?", "What work you do?"
];

let answers = [];

// note here we cannot declare this i before hand, because here i=0 indicates the default value, which is declared like this way only.
// this is one of the syntax of fucntions with default values.
function ask(i=0){
    process.stdout.write(questions[i]);
    process.stdout.write(" >  ");
}
ask();

process.stdin.on('data', function(data){
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
})

// lets print the answers on exiting the question answers round

process.on('exit', function(){
    process.stdout.write(`\n\n\nhi ${answers[0]} i speak ${answers[1]} too and i can help you in ${answers[2]}`);
})