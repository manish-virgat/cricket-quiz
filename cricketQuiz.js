var readlineSync = require('readline-sync');
var score = 0

function welcome() 
{
  var userName = readlineSync.question("Please enter your name: ");
  console.log("Welcome "+ userName + ". This is a quiz designed to test your knowledge in cricket. Let's get started");
}

var questions = 
[
    {
        question: "Who is the highest run scorer in Test Matches? ",
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which nation has won ICC World Cup the most number of times? ",
        answer: "Australia"
    },
    {
        question: "Which player holds the record of highest individual score in a test match innings? ",
        answer: "Brain Lara"
    },
    {
        question: "What is the name of the historic test series that is played between England and Australia since 1882-83? ",
        answer: "Ashes"
    },
    {
        question: "Which nation won the inaugural ICC Test championship final held in 2021? ",
        answer: "New Zealand"
    },
    {
        question: "In which year India won the ICC World Cup under the leadership of MS Dhoni? ",
        answer: "2011"
    },
    {
        question: "Which cricketer is known as The Universe Boss? ",
        answer: "Chris Gayle"
    },
]

function play(question, answer) 
{
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) 
  {
    console.log("Bingo! You got that right!");
    score = score + 1;
    
  }
  else 
  {
    console.log("Oh no! That's incorrect.");
  }

  console.log("current score: ", score);
  console.log("-*-*-*-*-*-*-*-*-*-*-*-*-")
}

function game() 
{
  for (var i=0; i<questions.length; i++) 
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() 
{
  console.log("Your final score is: ", score);
}

welcome();
game();
showScores();