var userChoice;

var correctChoice = 0;

var incorrectChoice = 0;

var noAnswer = 0;

var question = 0;

var images;

var count=120;

var hockeyQuestion = [{
question: "Which hockey player goes by the nickname 'Mr. Hockey'?",
choices: ["Wayne Gretzky", "P.K. Subban", "Mark Messier", "Gordie Howe" ],
validAnswer: 3
}, {
question:"Which NHL team has won the most Stanley Cups?",
choices: ["Boston Bruins", "Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings"],
validAnswer: 1

}, {
question:"Who is the NHL's all-time leading scorer?",
choices: ["Alex Ovechkin", "Sidney Crosby", "Mario Lemuix", "Wayne Gretzky"],
validAnswer: 3

}, {
question:"After 12 champions have been crowned, the Stanley Cup has a ring removed.",
choices: ["True", "False"],
validAnswer: 0

}, {
question:"A major penalty in hockey lasts for how many minutes?",
choices: ["2 Minutes", "4 Minutes", "5 Minutes", "10 Minutes"],
validAnswer: 2

 }, {
question:"There are three periods in a hockey Game. How long does each period last?",
choices: ["10 Minutes", "12 Minutes", "15 Minutes", "20 Minutes"],
validAnswer: 3

}, {
question:"How many wins does it take in the playoffs to win the Stanley Cup?",
choices: ["8", "12", "16", "20"],
validAnswer: 2

}, {
question:"Who is the magic man? Hint: Ask Siri.",
choices: ["Bobby Orr", "Steve Yzerman", "Sidney Crosby", "Pavel Datsyuk"],
validAnswer: 3

}

];

$("#startButton").click(function(){
$(this).hide();
counter = setInterval(timer, 1000); 
displayTrivia();
}); 


function timer(){
count--;
if (count <= 0) {
 clearInterval(counter);
 return;
}

 $("#timer").html("Time remaining: " + count + " secs");
}


function displayTrivia() {
$("#questionDiv").html(hockeyQuestion[0].question);
question++;

  var choicesArr = hockeyQuestion[0].choices;
  var buttonsArr = [];

  for (i = 0; i < choicesArr.length; i++) {
    var button = $('<button>');
    button.text(choicesArr[i]);
    button.attr('data-id', i);
    $('#choicesDiv').append(button);
   }

  } 

 $('#choicesDiv').on('click', 'button', function(e){
 userChoice = $(this).data("id");
 hockeyQuestion[0].validAnswer;
 if(userChoice != hockeyQuestion[0].validAnswer) {
 incorrectChoice++;

} else if (userChoice === hockeyQuestion[0].validAnswer) {
correctChoice++;

}

});