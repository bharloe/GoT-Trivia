//variables
var correctAnswer;
var userAnswer;
var randomQuestion;
var score = 0;


//initial render
var questionTemplate = "<h1 id='question'>Is this a test question?</h1><p>Time left:<span id='timeLeft'>10 seconds</span></p><div class='radio'><label id='A'><input type='radio' name='optradio' id='optionA'>Option 1</label></div><div class='radio'><label id='B'><input type='radio' name='optradio' id='optionB'>Option 2</label></div><div class='radio'><label id='C'><input type='radio' name='optradio' id='optionC'>Option 3</label></div><div class='radio'><label id='D'><input type='radio' name='optradio' id='optionD'>Option 4</label></div>"

//question objects
var question1 = {
    question: "In which battle did Jon Snow and Sansa Stark retake Winterfell from Lord Ramsay Bolton?",
    answer: "optionA",
    optionA: "The Battle of the Bastards",
    optionB: "The Battle of Winterfell",
    optionC: "The Battle of the Night's Watch",
    optionD: "The Battle of King's Landing"
};

var question2 = {
    question: "Who admitted responsibility for Joffrey's death after being forced to take poison?",
    answer: "optionC",
    optionA: "Arya Stark",
    optionB: "Sansa Stark",
    optionC: "Olenna Tyrell",
    optionD: "Littlefinger"
};

//questions Array
var questionsArr = [question1, question2];

//event listeners
$( document ).ready(function() {
    $("#startButton").on("click", function() {
        $("#questionBox").html(questionTemplate);
        renderQuestion();    
    });
});

//functions

//Render new question
function renderQuestion() {
    randomQuestion = questionsArr[Math.floor(Math.random()*questionsArr.length)];

    $("#question").text(randomQuestion.question);
    $("#A").html("<input type='radio' name='optradio' id='optionA'>"+randomQuestion.optionA);
    $("#B").html("<input type='radio' name='optradio' id='optionB'>"+randomQuestion.optionB);
    $("#C").html("<input type='radio' name='optradio' id='optionC'>"+randomQuestion.optionC);
    $("#D").html("<input type='radio' name='optradio' id='optionD'>"+randomQuestion.optionD);

    //attach event listener to new radio buttons
    $("input[name='optradio']").change(function(){
        console.log("test");
        checkQuestion();
        renderQuestion();
    });
};

//Check the question's answer
function checkQuestion() {
    correctAnswer = randomQuestion.answer;

    if ($("#optionA").prop("checked")) {
        userAnswer = "optionA";
    } else if ($("#optionB").prop("checked")) {
        userAnswer = "optionB";
    } else if ($("#optionC").prop("checked")) {
        userAnswer = "optionC";
    } else if ($("#optionD").prop("checked")) {
        userAnswer = "optionD";
    };

    if (userAnswer === correctAnswer) {
        score++
    };

    removeQuestion();
};

//Remove question from array of questions 
