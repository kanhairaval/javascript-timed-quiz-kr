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
    {question: "Which of the following function of String object returns the calling string value converted to upper case?",
    answers: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
    answer: "toUpperCase()"},
    {question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<javascript>", "<js>", "<scripting>", "<script>"],
    answer: "<script>"},
    {question: "How do you write Hello World in an alert box?",
    answers: ["msgBox('Hello World')", "alert('Hello World')", "msg('Hello World')", "alertBox('Hello World')"],
    answer: "alert('Hello World')"},
    {question: "How to write an IF statement in JavaScript?",
    answers: ["if (i === 5)", "if i == 5 then", "if i = 5 then", "if i = 5"],
    answer: "if (i === 5)"},
    {question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
    answers: ["if (i != 5)", "if i =! 5 then", "if i <> 5", "if (i <> 5)"],
    answer: "if (i != 5)"},
    {question: "How does a FOR loop start?",
    answers: ["for (i <= 5; i++)", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5"],
    answer: "for (i = 0; i <= 5; i++)"}
    ]

let shuffledQuizQuestions = function shuffle(quizQuestions) {
    for (let i = 0; i < quizQuestions.question.length; i++) {
        let index = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
        let newQuizQuestions = index;
    }
    return newQuizQuestions;
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
    answerOne.textContent = quizQuestions[0].answers[0];
    answerTwo.textContent = quizQuestions[0].answers[1];
    answerThree.textContent = quizQuestions[0].answers[2];
    answerFour.textContent = quizQuestions[0].answers[3];

    // answerButton.addEventListener("click", function () {
    //     if (answerButton === quizQuestions.answers.correct.true);
    //     correctText.setAttribute("Style", "display: block");
    // })
}

function displayMessage () {
    questionsVar.style.display = "none";
    endOfQuiz.setAttribute("Style", "display: block");
}