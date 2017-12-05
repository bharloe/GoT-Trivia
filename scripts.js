//variables
var correctAnswer;
var userAnswer;
var randomQuestion;
var time = 15;
var score = 0;
var wrong = 0;

//initial render
var questionTemplate =
  "<h1 id='question'>Is this a test question?</h1><p>Time left: <span id='timeLeft'>00:15</span></p><div class='radio'><label id='A'><input type='radio' name='optradio' id='optionA'>Option 1</label></div><div class='radio'><label id='B'><input type='radio' name='optradio' id='optionB'>Option 2</label></div><div class='radio'><label id='C'><input type='radio' name='optradio' id='optionC'>Option 3</label></div><div class='radio'><label id='D'><input type='radio' name='optradio' id='optionD'>Option 4</label></div>";

//question objects
var question1 = {
  question:
    "In which battle did Jon Snow and Sansa Stark retake Winterfell from Lord Ramsay Bolton?",
  answer: "optionA",
  optionA: "The Battle of the Bastards",
  optionB: "The Battle of Winterfell",
  optionC: "The Battle of the Night's Watch",
  optionD: "The Battle of King's Landing"
};

var question2 = {
  question:
    "Who admitted responsibility for Joffrey's death after being forced to take poison?",
  answer: "optionC",
  optionA: "Arya Stark",
  optionB: "Sansa Stark",
  optionC: "Olenna Tyrell",
  optionD: "Littlefinger"
};

var question3 = {
  question: "Can you name the squire in service to Brienne of Tarth?",
  answer: "optionB",
  optionA: "Tyrion Lannister",
  optionB: "Podrick Payne",
  optionC: "Jon Snow",
  optionD: "Grey Worm"
};

var question4 = {
  question:
    "Who is the commander of the warrior-eunuchs of Astapor, known as the Unsullied?",
  answer: "optionB",
  optionA: "Daenerys Targaryen",
  optionB: "Grey Worm",
  optionC: "Daario Naharis",
  optionD: "Jorah Mormont"
};

var question5 = {
  question:
    "What is the name of the form of obsidian that is capable of killing White Walkers?",
  answer: "optionD",
  optionA: "Greyscale",
  optionB: "Black Obsidian",
  optionC: "Valyrian steel",
  optionD: "Dragonglass"
};

var question6 = {
  question:
    "By what method were Randyll and Dickon, the father and brother of Samwell Tarly, killed after their defeat in battle?",
  answer: "optionA",
  optionA: "Dragonfire",
  optionB: "They were hung",
  optionC: "They weren't killed",
  optionD: "Exhaustion"
};

var question7 = {
  question: "How did Euron Greyjoy kill his the brother Balon Greyjoy?",
  answer: "optionC",
  optionA: "One on one combat",
  optionB: "Poison",
  optionC: "He pushed him off a bridge",
  optionD: "Wildfire"
};

var question8 = {
  question:
    "What's the name of the small sword wielded by Arya Stark? And who gave it to her as a gift?",
  answer: "optionB",
  optionA: "Longclaw. Brienne of Tarth gave her it as a gift.",
  optionB: "Needle. Jon Snow gave her it as a gift.",
  optionC: "Valyria. Sansa Stark gave it to her as a gift",
  optionD: "Needle. Ned Stark gave her it as a gift."
};

var question9 = {
  question:
    "In which room of the castle was Tywin Lannister when he was mudered by his son Tyrion?",
  answer: "optionA",
  optionA:
    "Toilet. He was sitting on the toilet when Tyrion shot him with a crossbow arrow.",
  optionB:
    "Throne room. He was giving a speech when Tyrion shot him with a crossbow.",
  optionC:
    "The fight pit. He was overseeing a trial by combat when Tyrion poisoned him.",
  optionD: "Bedroom. He was sleeping when Tyrion stabbed him with a sword."
};

var question10 = {
  question:
    "Who wrote the series of epic fantasy novels which were adapted into the series Game of Thrones? And what were these epic fantasy novels called?",
  answer: "optionD",
  optionA: "George R. R. Martin. Game of Thrones.",
  optionB: "George R. M. Martin. Game of Thrones.",
  optionC: "George R. M. Martin. A Song of Ice and Fire.",
  optionD: "George R. R. Martin. A Song of Ice and Fire."
};

var question11 = {
  question:
    "Name the capital city of Westeros' Seven Kingdoms and the seat of the Iron Throne?",
  answer: "optionC",
  optionA: "Casterly Rock",
  optionB: "Dragonstone",
  optionC: "King's Landing",
  optionD: "Storm's End"
};

var question12 = {
  question: "Skroth is the language spoken by which race of creatures?",
  answer: "optionD",
  optionA: "The Dothraki",
  optionB: "The Children of the Forest",
  optionC: "The Wildlings",
  optionD: "The White Walkers"
};

//questions Array
var questionsArr = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12
];

//event listeners
$(document).ready(function() {
  $("#startButton").on("click", function() {
    $("#questionBox").html(questionTemplate);
    renderQuestion();
  });
});

//Functions

//Render new question
function renderQuestion() {
  randomQuestion = questionsArr[Math.floor(Math.random() * questionsArr.length)];

  $("#question").text(randomQuestion.question);
  $("#A").html(
    "<input type='radio' name='optradio' id='optionA'>" + randomQuestion.optionA
  );
  $("#B").html(
    "<input type='radio' name='optradio' id='optionB'>" + randomQuestion.optionB
  );
  $("#C").html(
    "<input type='radio' name='optradio' id='optionC'>" + randomQuestion.optionC
  );
  $("#D").html(
    "<input type='radio' name='optradio' id='optionD'>" + randomQuestion.optionD
  );

  reset();
  startTimer();

  //attach event listener to new radio buttons
  $("input[name='optradio']").change(function() {
    checkQuestion();
    stop();
    renderQuestion();
  });
}

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
  }

  if (userAnswer === correctAnswer) {
    score++;
  } else {
    wrong++;
  }

  removeQuestion(randomQuestion);
}

//Remove question from array of questions
function removeQuestion(obj) {
  var index = questionsArr.indexOf(obj);
  if (index > -1) {
    questionsArr.splice(index, 1);
  }
}

function timeRanOut() {
  wrong++;
  removeQuestion(randomQuestion);
  stop();
  renderQuestion();
}

//Timer

function reset() {
  time = 15;
  $("#timeLeft").text("00:15");
}

function startTimer() {
  intervalId = setInterval(count, 1000);
}

function stop() {
  console.log("stopping");
  clearInterval(intervalId);
}

function count() {
  time--;
  var converted = timeConverter(time);
  $("#timeLeft").text(converted);
  if (time === 0) {
    timeRanOut();
  }
}

function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}
