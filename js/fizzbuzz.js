function consoleLog(x){
    return console.log(x);
}

const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

let answer = parseInt(prompt("Please enter your desired number:"));
checkAnswer(answer);
function checkAnswer(answer){
    for(i = 1; i <= answer; i++){
        if(i % 3 === 0 && i % 5 === 0 ){
            consoleLog(fizzBuzz);
        }
        else if(i % 3 === 0){
            consoleLog(fizz);
        }
        else if(i % 5 === 0){
            consoleLog(buzz);
        }
        else{
            consoleLog(i);
        }
    }
}