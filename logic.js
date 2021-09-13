var timeDisplay = document.getElementById("timeDisplay")
var timer = document.getElementById ("timer")
var startButton = document.getElementById ("start-btn")
var startScreen = document.getElementById ("start-screen")
var questions = document.getElementById ("questions")
var questionTitle = document.getElementById ("question-title")
var questionContainer = document.getElementById ("questions-container")
var questionDiv = document.getElementById ("question-title")
var choices = document.getElementById ("choices")
var answerBtn1 = document.getElementById ('answer1')
var answerBtn2 = document.getElementById ('answer2')
var answerBtn3 = document.getElementById ('answer3')
var answerBtn4 = document.getElementById ('answer4')
var feedback = document.getElementById ('feedBack') 
var qNum = 0
var timeLeft = 0
var quizTime = 0
var score = 0

// this function is to check if current page is highscore page
if (title.innerHTML === "Highscores") {
    renderTable();
}

// set initial timer value and fire off two functions
function quizStart() {
    timeLeft = 75
    startTimer();
    initQ();
}
//  function changes timer display every tick (second)
function startTimer() {
    timer.innerHTML = (timeLeft);
    quizTime = setInterval(tick, 1000);
}
//  function equates a tick to a second and determines when timer reaches zero
function tick() {
    if (timeLeft !== 0) {
     timeLeft--
     timer.innerHTML = (timeLeft)
    }
    else {
        clearInterval(quizTime)
        quizOver();
    }
    return;
}


function quiz() {   
    if (qNum >= questionsArray.length) {
    quizOver();
}
else {
    questionTitle.innerHTML = (questionsArray[qNum].title)
    answerBtn1.innerHTML = (questionsArray[qNum].choices[1])
    answerBtn2.innerHTML = (questionsArray[qNum].choices[2])
    answerBtn3.innerHTML = (questionsArray[qNum].choices[3])
    answerBtn4.innerHTML = (questionsArray[qNum].choices[4])
}}

//  function checks whether or not answer is the correct one
function answerCheck(btnId) {
    console.log(btnId)
    if ((document.getElementById(btnId).innerHTML) === (questionsArray[qNum].answer)) {
        rightAnswer();
        qNum++
    }
    else {
       wrongAnswer();
        qNum++
    }
    quiz(qNum);
}
//  this function runs when answer is right
function rightAnswer() {
    score = timeLeft
    feedback.innerHTML = ("Correct");
    setTimeout(function() {feedback.innerHTML = ("");}, 800)
}
//  this function runs when answer is wrong
function wrongAnswer() {
    timeLeft = (timeLeft - 15)
    feedback.innerHTML = ("Wrong");
    setTimeout(function() {feedback.innerHTML = ("");}, 800)
}

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('startQuiz');
    questions.classList.remove('hide');
    startScreen.setAttribute("style", "display:none;");
   
}











