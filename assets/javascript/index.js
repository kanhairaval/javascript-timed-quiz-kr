// Welcome to JavaScript for beginners quiz. You will have 60 seconds to answer all the questions. Right answer, will gain you 10 points, any wrong answers and you shall lose 10 seconds from the remaining time & you won't be awarder any points. Good luck !!!
let startButton = document.getElementById("strt-button");
let leftHeader = document.getElementById("high-score");
let rightHeader = document.getElementById("time-left");
let timeLeft = 60;
let questionsStart = document.getElementById("questions");

let quizQuestions = [
    {question: "Which of the following function of String object returns the calling string value converted to upper case?", answers: [{text: "toLocaleUpperCase()", correct: false}, {text: "toUpperCase()", correct: true}, {text: "toString()", correct: false}, {text: "substring()", correct: false}]}, 
    {question: "Inside which HTML element do we put the JavaScript?", answers: [{text: "<javascript>", correct: false}, {text: "<js>", correct: false}, {text: "<scripting>", correct: false}, {text: "<script>", correct: true}]},
    {question: "How do you write Hello World in an alert box?", answers: [{text: "msgBox('Hello World')", correct: false}, {text: "alert('Hello Wolrd')", correct: true}, {text: "msg('Hello World')", correct: false}, {text: "alertBox('Hello World')", correct: false},]},
    {question: "How to write an IF statement in JavaScript?", answers: [{text: "if (i === 5)", correct: true}, {text: "if i == 5 then", correct: false}, {text: "if i = 5 then", correct: false}, {text: "if i = 5", correct: false}]},
    {question: "How to write an IF statement for executing some code if i is NOT equal to 5?", answers: [{text: "if (i != 5)", correct: true}, {text: "if i =! 5 then", correct: false}, {text: "if i <> 5", correct: false}, {text: "if (i <> 5)", correct: false}]},
    {question: "How does a FOR loop start?", answers: [{text: "for (i <= 5; i++)", correct: false}, {text: "for (i = 0; i <= 5)", correct: false}, {text: "for (i = 0; i <= 5; i++)", correct: true}, {text: "for i = 1 to 5", correct: false}]}];

let questionsVar = document.getElementById("questions-container");

questionsVar.setAttribute("Style", "display: none");

let startQuiz = startButton.addEventListener("click", function() {
    document.getElementById("initial-container").style.display = "none";
    if (questionsVar.style.display === "none") {
        renderQuestions();
    }
});

let renderQuestions = function () {
    questionsVar.style.display = "block"
    for (let i = 0; i <= quizQuestions.length; i++) {
        questionsStart[this.question.textContent] = quizQuestions[Math.floor(Math.random() * 6)]
    }
}