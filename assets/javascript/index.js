// Welcome to JavaScript for beginners quiz. You will have 60 seconds to answer all the questions. Right answer, will gain you 10 points, any wrong answers and you shall lose 10 seconds from the remaining time & you won't be awarder any points. Good luck !!!
let startButton = document.getElementById("strt-button");
let leftHeader = document.getElementById("high-score");
let rightHeader = document.getElementById("time-left");
let timeLeft = 60;
let score = 0;
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
let newShuffledQuizQuestions = [];
let endScreen = document.getElementById("final-score");
let goBackBtn = document.getElementById("go-back");
let clearScore = document.getElementById("clear-score");

questionsVar.setAttribute("Style", "display: none");
endOfQuiz.setAttribute("Style", "display: none");
correctText.setAttribute("Style", "display: none");
inCorrectText.setAttribute("Style", "display: none");
// endScreen.setAttribute("Style", "display: none");
// goBackBtn.setAttribute("Style", "display: none");
// clearScore.setAttribute("Style", "display: none");

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

    function shuffle(quizQuestions) {
        for (let i = 0; i < quizQuestions.length; i++) {
            let index = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
            newShuffledQuizQuestions.push(index);
        }
        return newShuffledQuizQuestions;
    }

    shuffle(quizQuestions);

let startQuiz = startButton.addEventListener("click", function() {
    document.getElementById("initial-container").style.display = "none";
    if (questionsVar.style.display === "none") {
        renderQuestions();
    }
    leftHeader.textContent = "Score:";
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
    questionsStart.textContent = newShuffledQuizQuestions[0].question;
    answerOne.textContent = newShuffledQuizQuestions[0].answers[0];
    answerTwo.textContent = newShuffledQuizQuestions[0].answers[1];
    answerThree.textContent = newShuffledQuizQuestions[0].answers[2];
    answerFour.textContent = newShuffledQuizQuestions[0].answers[3];
}

for (i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener("click", function (event) {
    if (event.target.textContent === newShuffledQuizQuestions[0].answer) {
    correctText.setAttribute("Style", "display: block");
    score += 10;
    leftHeader.innerText = (`Score: ${score}`);
} else {
    inCorrectText.setAttribute("Style", "display: block");
    timeLeft -= 10;
}
})
};

function displayMessage () {
    questionsVar.style.display = "none";
    endOfQuiz.setAttribute("Style", "display: block");
}

// questionsStart.textContent = newShuffledQuizQuestions[1].question;
//     answerOne.textContent = newShuffledQuizQuestions[1].answers[0];
//     answerTwo.textContent = newShuffledQuizQuestions[1].answers[1];
//     answerThree.textContent = newShuffledQuizQuestions[1].answers[2];
//     answerFour.textContent = newShuffledQuizQuestions[1].answers[3];

//     questionsStart.textContent = newShuffledQuizQuestions[2].question;
//     answerOne.textContent = newShuffledQuizQuestions[2].answers[0];
//     answerTwo.textContent = newShuffledQuizQuestions[2].answers[1];
//     answerThree.textContent = newShuffledQuizQuestions[2].answers[2];
//     answerFour.textContent = newShuffledQuizQuestions[2].answers[3];

//     questionsStart.textContent = newShuffledQuizQuestions[3].question;
//     answerOne.textContent = newShuffledQuizQuestions[3].answers[0];
//     answerTwo.textContent = newShuffledQuizQuestions[3].answers[1];
//     answerThree.textContent = newShuffledQuizQuestions[3].answers[2];
//     answerFour.textContent = newShuffledQuizQuestions[3].answers[3];

//     questionsStart.textContent = newShuffledQuizQuestions[4].question;
//     answerOne.textContent = newShuffledQuizQuestions[4].answers[0];
//     answerTwo.textContent = newShuffledQuizQuestions[4].answers[1];
//     answerThree.textContent = newShuffledQuizQuestions[4].answers[2];
//     answerFour.textContent = newShuffledQuizQuestions[4].answers[3];

//     questionsStart.textContent = newShuffledQuizQuestions[5].question;
//     answerOne.textContent = newShuffledQuizQuestions[5].answers[0];
//     answerTwo.textContent = newShuffledQuizQuestions[5].answers[1];
//     answerThree.textContent = newShuffledQuizQuestions[5].answers[2];
//     answerFour.textContent = newShuffledQuizQuestions[5].answers[3];