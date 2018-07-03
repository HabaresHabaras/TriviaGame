/* HOW THE GAME WORKS
-1.A start menu and button welcomes the player 
 -   2.When start is pressed, the trivia starts { 
 -       3.The trivia is a set of questions, that give 4 choices of an answer to the player
 -                   3.5.When a question is shown, a timer starts for 30 secondS, and it's shown to the player, when time runs out, if the player doesn't choose, the question is incorrect
            4.Of the 4, only 1 is right, pressing that one, shows another page congratulating the player
            5.Pressing any of the others take the player to another page, saying "Thats not the answer" and showing the right answer
            6.Every time the player presses the right choice, gets a point, if not the right choice, no point
    7.At the end of the trivia, a page will show the player how many answers got right/wrong
*/


/*PREVIOUS FAILED CODE

var questions = [
    {
        prompt:"What color are apples?\n(a) red\n (b) Purple\n (c) Orange\n(d) Yellow",
        answer:"a"
    },

    {
        prompt:"What color are apples?\n(a) red\n (b) Purple\n (c) Orange\n(d) Yellow",
        answer:"a"
    },

    {
        prompt:"What color are apples?\n(a) red\n (b) Purple\n (c) Orange\n(d) Yellow",
        answer:"a"
    },

    {
        prompt:"What color are apples?\n(a) red\n (b) Purple\n (c) Orange\n(d) Yellow",
        answer:"a"
    },

    {
        prompt:"What color are apples?\n(a) red\n (b) Purple\n (c) Orange\n(d) Yellow",
        answer:"a"
    },

]

var score = 0;

for(var i=0; i <questions.length; i++){
    //var response = ;//userinput window.prompt(questions[i].promt)
    if(response == questions[i].answer){
        score++;
    }else{
        alert("wrong");
    }
}
*/
//tell user what they got

/* CODIGO IMPORTANTE PARA EMPEZAR EL JUEGO AL PULSAR START */

    
var countdown;
var countdown_number;


function countdown_init() {
    countdown_number = 15;
    countdown_trigger();
}

function countdown_trigger() {
    if(countdown_number > 0) {
        countdown_number--;
        $(".countdown_text").html(countdown_number);
       if(countdown_number > 0) {
            countdown = setTimeout('countdown_trigger()', 1000);
        }
        else if(countdown_number === 0){
            next();

          }
    }
}



function countdown_clear() {
    clearTimeout(countdown);
}

    $("#StartButton").click(function () {
        $("#pageStart").hide();
        $("#superTrivia").show();
    });



var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('superTrivia');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var underResult = document.getElementById('underResult');
function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;   
    opt2.textContent = q.option2;   
    opt3.textContent = q.option3;   
    opt4.textContent = q.option4;   
};

function next(){
    currentQuestion++;
    loadQuestion(currentQuestion);
    countdown_init();
}



function loadNextQuestion(){
    var selectedOption = document.querySelector('input[type=radio]:checked');
   // if(!selectedOption){
     //   currentQuestion++;  
   // }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    countdown_number = 15;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        underResult.style.display = '';

        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

    

















