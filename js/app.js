/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*
Create phrase class
constructor should take phrase parameter
create phrase property converted to lower case

addPhraseToDisplay() method: 
create li and each li's text content should be  letter of the phrase with a class of hide letter

check Letter() method: 
check if the letter selected by the player is one of the letters in the phrase

showMatchedLetter() method: reveal the letters on the board  that matches the player selection
select all DOM elements with the class of match letters and replace the hide class with the show class for each elements

 */

 /* 
Create game class
constructor properties:
missed: number of times a player guessed wrong. initial value = 0
phrases: an array of 5 phrases. Phrases should not have numbers or puncutation 
active phrase: current phrase playing. initial value = null (will be set in the startgame method)

startGame():
hide start screen
call getranodmphrase
set active phrase 
add active phrase to display using addphrasetodisplay()

getRandomPhrase():
randomly retrieve 1 phrase from phrases and returns it 

handleInteraction(): 
checks to see if the letter pressed by the player is correct anot
after user clicks it, disable the letter button
if it is wrong, add the wrong class to the selected letter button and then call the remove life method
if it is correct, then call the showMatchedLetter method from the phrase class and then call checkForWin()
if player has won, call the gameOver() method.

removeLife()
removes a life from the score board by replacing a liveHeart picture with a lostHeart (starts with 5 live heart images)
add the missed property by 1 
if the player has 5 missed properties, call the gameover method

checkForWin():
check to see if the player has guessed all the letters

gameOver(): 
if user win, display winning screen
if lose, display losing screen

 */


 /*
create a new instance of game class

add click listner to start game button and call startGame() when clicked

add click listener to all the letter buttons and call handleInteraction() method from the game object  (add to div with id of section)

startGame(): 
remove all li elements 
reset all css class for all the letter buttons
reset all heart images
 */

