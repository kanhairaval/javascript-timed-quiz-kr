let startButton = document.getElementById("strt-button");
let leftHeader = document.getElementById("high-score");
let rightHeader = document.getElementById("time-left");
let timeLeft = 60;
let score = 0;
let currentQuestionIndex = 0;
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
let submitButton = document.getElementById("submit-btn");
let inputField = document.getElementById("input-field");
let endText = document.getElementById("end-text");

questionsVar.setAttribute("Style", "display: none");
endOfQuiz.setAttribute("Style", "display: none");
correctText.setAttribute("Style", "display: none");
inCorrectText.setAttribute("Style", "display: none");
endScreen.setAttribute("Style", "display: none");
goBackBtn.setAttribute("Style", "display: none");
clearScore.setAttribute("Style", "display: none");

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
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * quizQuestions.length);
            newShuffledQuizQuestions.push(quizQuestions[index]);
            quizQuestions.splice(index, 1);
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
    questionsStart.textContent = newShuffledQuizQuestions[currentQuestionIndex].question;
    answerOne.textContent = newShuffledQuizQuestions[currentQuestionIndex].answers[0];
    answerTwo.textContent = newShuffledQuizQuestions[currentQuestionIndex].answers[1];
    answerThree.textContent = newShuffledQuizQuestions[currentQuestionIndex].answers[2];
    answerFour.textContent = newShuffledQuizQuestions[currentQuestionIndex].answers[3];
}

for (i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener("click", function (event) {
    if (event.target.textContent === newShuffledQuizQuestions[currentQuestionIndex].answer) {
    correctText.setAttribute("Style", "display: block");
    inCorrectText.setAttribute("Style", "display: none");
    score += 10;
    leftHeader.innerText = (`Score: ${score}`);
    currentQuestionIndex ++;
    renderQuestions();
} else {
    inCorrectText.setAttribute("Style", "display: block");
    correctText.setAttribute("Style", "display: none");
    timeLeft -= 10;
    currentQuestionIndex ++;
    renderQuestions();
}
})
};

function displayMessage () {
    questionsVar.style.display = "none";
    inCorrectText.setAttribute("Style", "display: none");
    correctText.setAttribute("Style", "display: none");
    endOfQuiz.setAttribute("Style", "display: block");
    leftHeader.innerText = (`Score: ${score}`);
}

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    submitButton.setAttribute("Style", "display: none");
    inputField.setAttribute("Style", "display: none");
    endText.setAttribute("Style", "display: none");
    endScreen.setAttribute("Style", "display: block");
    endScreen.innerText = `Your Score: ${score}`
    goBackBtn.setAttribute("Style", "display: block");
    clearScore.setAttribute("Style", "display: block");

    let initials = inputField.value;

    if (initials === "") {
        displayMessage("error", "Initials cannot be blank");
      } else {
        displayMessage("success", "Registered successfully");
    
      localStorage.setItem("initials", initials);
      renderLastRegistered();
      }
})

function renderLastRegistered() {
    let initials = localStorage.getItem("initials");
  
    endScreen.innerText = `Your Score: ${initials} ${score}`
  }

  clearScore.addEventListener("click", function () {
    endScreen.innerText = "Your Score:";
  })

  goBackBtn.addEventListener("click", function () {
    window.location.reload();
  })