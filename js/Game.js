/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [];
         this.activePhrase = null;
     }

     startGame() {
         document.querySelector('.start').style.display = 'none'
         this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();
     }

     getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        this.activePhrase = this.phrases[randomNumber];
     }

     handleInteraction(letter) {
        // letter.disabled = true;
        if (this.activePhrase.checkLetter(letter)) {
            return console.log('right!')
        } else {
            return console.log('wrong!!')
        }
     }

     removeLife() {
         this.missed += 1;
         if (this.missed === 5) {
             this.gameOver();
         }
     }

     checkForWin() {
        if (this.activePhrase.letters.length === 0) {
            return true
        } else {
            return false
        }
     }

     gameOver() {
        if (this.checkForWin()) {
            console.log('win')
        } 
        else {
            console.log('lose')
        }
     }
 }