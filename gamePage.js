var player1Name = localStorage.getItem("Player 1");
var player2Name = localStorage.getItem("Player 2");
var player1Score = 0;
var player2Score = 0;
var asking = player1Name;
var answering = player2Name;
var number1 = 0;
var number2 = 0;
var answer = number1 * number2;
console.log("Player 1: " + player1Name);
console.log("Player 2: " + player2Name);
console.log("Player 1 score: " + player1Score);
console.log("Player 2 score: " + player2Score);
console.log("Asking: " + asking);
console.log("Answering: " + answering);
console.log("Equation answer: " + answer);
function setText(){
    document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
    document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
    document.getElementById("questionTurn").innerHTML = "Asking question: " + asking;
    document.getElementById("answerTurn").innerHTML = "Answering question: " + answering;
}
function check(){
    var answer = number1 * number2;
    var playerAnswer = document.getElementById("answerInput").value;
    console.log(answering + "'s answer: " + playerAnswer);
    if(playerAnswer == answer){
        document.getElementById("answerInput").innerHTML = "";
        console.log(answering + " got the question right!");
        if(answering == player1Name){
            player1Score = player1Score + 1;
            console.log(answering + "'s score: " + player1Score);
        } else if(answering == player2Name){
            player2Score = player2Score + 1;
            console.log(answering + "'s score: " + player2Score);
        }
    } else{
        document.getElementById("answerInput").innerHTML = "";
        console.log(answering + " got the question wrong.");
        if(asking == player2Name){
            player2Score = player2Score + 1;
            console.log(player2Name + "'s score: " + player2Score);
        }
    }
}
function send(){
    var answer = number1 * number2;
    var pinkP = "<div class='pink'><p class='pinkP'>_____</p></div>"
    var displayQuestion = "<p id='displayQuestion'>? x ? = ?</p>";
    var answerInput = "<input id='answerInput' placeholder='Type here...' type='number'>";
    var checkButton = "<button id='checkButton' type='button' onclick='check()'>Check</button><br>";
    var row = pinkP + displayQuestion + answerInput + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("displayQuestion").innerHTML = number1 + " x " + number2;
    document.getElementById("number1Input").innerHTML = "";
    document.getElementById("number2Input").innerHTML = "";
    number1 = document.getElementById("number1Input").value;
    number2 = document.getElementById("number2Input").value;
    console.log("Number 1: " + number1);
    console.log("Number 2: " + number2);
    console.log("Equation answer: " + answer);
}