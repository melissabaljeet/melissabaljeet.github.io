$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
var randomNumber = Math.floor(Math.random()*100);
console.log("computer guess = "+randomNumber);
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var guess= parseInt($('input').val());
    console.log(guess);
    $('#guess_counter')= 0;
    //and compare this guess to the random number that the computer picked
    // if the user guessed the correct number...
    if (guess === randomNumber){
      //what happens if the guess is correct
           $(this).find('guess_counter').css('opacity',1);  
           $('#feedback').empty(); 
           $('#feedback').append("You're right!")} 
    //if the user guessed too high...
    else if (guess > randomNumber){
      //update the 'feedback' paragraph to tell them to guess lower
            $(this).find('guess_counter').css('opacity',1)
            $('#feedback').empty(); 
            $('#feedback').append("Guess lower")}
    //otherwise, the user guessed too low...
    else {
      //update the 'feedback' paragraph to tell them to guess higher
            $(this).find('guess_counter').css('opacity',1)
            $('#feedback').empty();
            $('#feedback').append("Guess higher")}
  });
});
