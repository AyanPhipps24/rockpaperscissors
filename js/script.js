// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice =""
var computerChoice =""
var winner =""

var randomNumber = 0
// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    userChoice= $("#input").val();
   randomNumber=Math.random();
   computerChoice= $("randomNumber")
    $("#userChoice").text(userChoice);
    alert(randomNumber);
});

