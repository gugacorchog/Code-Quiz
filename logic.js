var timeDisplay = document.getElementById("timeDisplay")
var timer = document.getElementById("timer")
var startButton = document.getElementById("start-btn")
var startScreen = document.getElementById("start-screen")
var questions = document.getElementById("questions")
var questionTitle = document.getElementById("question-title")
var questionContainer = document.getElementById("questions-container")
var questionDiv = document.getElementById("question-title")
var choices = document.getElementById("choices")
var answerBtn1 = document.getElementById('answer1')
var answerBtn2 = document.getElementById('answer2')
var answerBtn3 = document.getElementById('answer3')
var answerBtn4 = document.getElementById('answer4')
var feedback = document.getElementById('feedBack') 
var qNum = 0
var timeLeft = 0
var quizTime = 0
var score = 0


// this function is to check if current page is highscore page
if (title.innerHTML === "Highscores") {
    renderTable();
}


// set initial timer value and fire off two functions
function initiate() {
    timeLeft = 75
    startTimer();
   
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
        questionTitle.textContent = questionsArray[qNum].title
        answerBtn1.textContent = questionsArray[qNum].choices[0]
        answerBtn2.textContent = questionsArray[qNum].choices[1]
        answerBtn3.textContent = questionsArray[qNum].choices[2]
        answerBtn4.textContent = questionsArray[qNum].choices[3]
        
    }
}

//  function checks whether or not answer is the correct one
function answerCheck(btnId) {
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

// Game is over functions

function quizOver(){
    document.querySelectorAll(".quiz").forEach(quiz => {quiz.style.display = "none"})
    var content = document.getElementById('theContent')
    var done = document.getElementById('done')
    var submit = document.getElementById('submit')

    timer.innerHTML = (0)
// Added text and button to submit afert finish game 
    content.insertAdjacentHTML('afterbegin', '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-danger">Submit</button> <input id="userScore"> - Enter Initials</input>');

    var done = document.getElementById('done')
    done.insertAdjacentHTML('afterend', '<p id="finalScore">Your final score is ' + score + '</p>');
// Function to add to local Storage
    var submit = document.getElementById('submit')
    submit.addEventListener("click", function(){
    var value = document.getElementById('userScore').value;
    localStorage.setItem(value, score)
    window.location.href = "highscore.html"    

    });
    clearInterval(quizTime)
}

// start Quiz button and initiate questions function
startButton.addEventListener('click', startQuiz)

function startQuiz() {    
    
    questions.classList.remove('hide');
    startScreen.setAttribute("style", "display:none;");
    questionTitle.textContent = questionsArray[qNum].title
    answerBtn1.textContent = questionsArray[qNum].choices[0]
    answerBtn2.textContent = questionsArray[qNum].choices[1]
    answerBtn3.textContent = questionsArray[qNum].choices[2]
    answerBtn4.textContent = questionsArray[qNum].choices[3]
    initiate()
}











