// for (let i = 1; i < 4; i = i + 1 ) {
//   $("#response").append("<br />" + i);
// }
//
// Write a program so that when you reload your page, it asks for a number and prints all the numbers from 1 to it, including it;


let userInput;
userInput = prompt("What's your favorite number between 1 and 5", "Type your answer here.");
let i;
i = 1;
while ( i => userInput ) {
  $("#response").html("<br />" + i);
  i = i + 1;
}

// if ( userInput === "burrito" ) {
//   $("#response").html("Brilliant choice!");
// }
// else {
//   $("#response").html("Don’t you want a burrito?");
// }


// let i;
// i = 1;
// while ( i < 4 ) {
//   $("#response").append("<br />" + i);
//   i = i + 1;
// }
