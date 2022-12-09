// Welcome to JavaScript for beginners quiz. You will have 60 seconds to answer all the questions. Right answer, will gain you 10 points, any wrong answers and you shall lose 10 seconds from the remaining time & you won't be awarder any points. Good luck !!!
let startButton = document.getElementById("strt-button");
let leftHeader = document.getElementById("high-score");
let rightHeader = document.getElementById("time-left");
let timeLeft = 60;
let questionsStart = document.getElementById("questions");
let answerOne = document.getElementById("ans-1");
let answerTwo = document.getElementById("ans-2");
let answerThree = document.getElementById("ans-3");
let answerFour = document.getElementById("ans-4");
let endOfQuiz = document.getElementById("end-quiz");
let questionsVar = document.getElementById("questions-container");
let answerButton = document.querySelectorAll(".btn");
let correctText = document.getElementById("correct-text");
let inCorrectText = document.getElementById("incorrect-text");

questionsVar.setAttribute("Style", "display: none");
endOfQuiz.setAttribute("Style", "display: none");
correctText.setAttribute("Style", "display: none");
inCorrectText.setAttribute("Style", "display: none");

let quizQuestions = [
    {question: "Which of the following function of String object returns the calling string value converted to upper case?", answers: [{text: "toLocaleUpperCase()", correct: false}, {text: "toUpperCase()", correct: true}, {text: "toString()", correct: false}, {text: "substring()", correct: false}]}, 
    {question: "Inside which HTML element do we put the JavaScript?", answers: [{text: "<javascript>", correct: false}, {text: "<js>", correct: false}, {text: "<scripting>", correct: false}, {text: "<script>", correct: true}]},
    {question: "How do you write Hello World in an alert box?", answers: [{text: "msgBox('Hello World')", correct: false}, {text: "alert('Hello Wolrd')", correct: true}, {text: "msg('Hello World')", correct: false}, {text: "alertBox('Hello World')", correct: false},]},
    {question: "How to write an IF statement in JavaScript?", answers: [{text: "if (i === 5)", correct: true}, {text: "if i == 5 then", correct: false}, {text: "if i = 5 then", correct: false}, {text: "if i = 5", correct: false}]},
    {question: "How to write an IF statement for executing some code if i is NOT equal to 5?", answers: [{text: "if (i != 5)", correct: true}, {text: "if i =! 5 then", correct: false}, {text: "if i <> 5", correct: false}, {text: "if (i <> 5)", correct: false}]},
    {question: "How does a FOR loop start?", answers: [{text: "for (i <= 5; i++)", correct: false}, {text: "for (i = 0; i <= 5)", correct: false}, {text: "for (i = 0; i <= 5; i++)", correct: true}, {text: "for i = 1 to 5", correct: false}]}];

let shuffledQuizQuestions = function shuffle(quizQuestions) {
    for (let i = 0; i < quizQuestions.length; i++) {
        let index = Math.floor(Math.random() * quizQuestions.length)
        let newQuizQuestions = index;
    }
}

let startQuiz = startButton.addEventListener("click", function() {
    document.getElementById("initial-container").style.display = "none";
    if (questionsVar.style.display === "none") {
        renderQuestions();
    }
    leftHeader.textContent = "View Score";
    setInterval(function() {
        if (timeLeft > 1) {
            rightHeader.textContent = `${timeLeft} seconds remaining`;
            timeLeft--;
        } else if (timeLeft === 1) {
            rightHeader.textContent = `${timeLeft} second remaining`;
            timeLeft--;
        } else {
            rightHeader.textContent = "No more time left.";
            clearInterval();
            displayMessage();
        }
    }, 1000)
});

let renderQuestions = function () {
    questionsVar.style.display = "block";
    questionsStart.textContent = quizQuestions[0].question;
    answerOne.textContent = quizQuestions[0].answers[0].text;
    answerTwo.textContent = quizQuestions[0].answers[1].text;
    answerThree.textContent = quizQuestions[0].answers[2].text;
    answerFour.textContent = quizQuestions[0].answers[3].text;

    answerButton.addEventListener("click", function () {
        if (answerButton === quizQuestions.answers.correct.true);
        correctText.setAttribute("Style", "display: block");
    })
}

function displayMessage () {
    questionsVar.style.display = "none";
    endOfQuiz.setAttribute("Style", "display: block");
}