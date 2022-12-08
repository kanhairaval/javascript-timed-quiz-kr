// Welcome to JavaScript for beginners quiz. You will have 60 seconds to answer all the questions. Right answer, will gain you 10 points, any wrong answers and you shall lose 10 seconds from the remaining time & you won't be awarder any points. Good luck !!!
let startButton = document.getElementById("strt-button");
let leftHeader = document.getElementById("high-score");
let rightHeader = document.getElementById("time-left");
let timeLeft = 60;

let quizQuestions = ["Which of the following methods is used to access HTML elements using Javascript?", "How can a datatype be declared to be a constant type?", "Which of the following keywords is used to define a variable in Javascript?", "Which function is used to serialize an object into a JSON string in Javascript?", "How to stop an interval timer in Javascript?", "How do we write a comment in javascript?"];

let questionsVar = document.getElementById("questions-container");

// questionsVar.setAttribute("Style", "display: none");

// let startQuiz = startButton.addEventListener("click", function() {
//     document.getElementById("initial-container").style.display = "none";
//     if (questionsVar.setAttribute("Style", "display: none") === true) {
//         questionsVar.setAttribute("Style", "display: block");
//     }
// })