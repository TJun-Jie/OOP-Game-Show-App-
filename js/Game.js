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
        //  hide the start screen to show the main screen
        document.querySelector('.start').style.display = 'none'
        this.resetGame()

         

     }

     getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        this.activePhrase = this.phrases[randomNumber];
     }

     handleInteraction(letterButton) {
        //  disable button after it is pressed
        letterButton.disabled = true;
        
        // if user clicked the right letter
        if (this.activePhrase.checkLetter(letterButton.textContent)) {
            // show the letter on the screen
            this.activePhrase.showMatchedLetter(letterButton.textContent)
            // add 'correct' class to button 
            letterButton.classList.add('chosen')
            // if all letters have been guessed call the game over method 
            if(this.checkForWin()) {
                this.gameOver();
            }
            return console.log('right!')
        // if user clicked the wrong letter
        } else {
            // add 'wrong' button class
            letterButton.classList.add('wrong')
            // remove life
            this.removeLife();
            return console.log('wrong!!')
        }
     }


     removeLife() {
        this.missed += 1;
        // Select heart img src and change it to lostHeart when the user guess wrong letter
        const hearts = document.querySelectorAll('.tries')
        const heart = hearts[this.missed - 1].children[0]
        heart.src = 'images/lostHeart.png'
        // When user has 5 wrong guesses, call gameover 
         if (this.missed === 5) {
            this.gameOver();
         }
     }

    //  check if all the letters have been spliced out, which means the user has guessed all the letters
     checkForWin() {
        if (this.activePhrase.letters.length === 0) {
            return true
        } else {
            return false
        }
     }


    //  bring user back to the start screen with respective winning or losing screen
     gameOver() {
         const start = document.querySelector('.start');
        if (this.checkForWin()) {
            start.style.display = 'block';
            start.classList.add('win')  
        } 
        else {
            start.style.display = 'block';
            start.classList.add('lose')            
        }
     }

     resetGame() {

        //  reset display
        if (this.activePhrase) {
            for (let i = 0 ; i < this.activePhrase.phrase.length; i++ ) {
                const li = document.querySelector('#phrase li');
                li.parentElement.removeChild(li)
            }

        }
        // reset buttons
        const correctButtons = document.querySelectorAll('.chosen');
        for (let i = 0; i < correctButtons.length; i ++) {
            correctButtons[i].classList.remove('chosen')
            correctButtons[i].disabled = false;
        }
        
        const wrongButtons = document.querySelectorAll('.wrong');
        for (let i = 0; i < wrongButtons.length; i ++) {
            wrongButtons[i].classList.remove('wrong')
            wrongButtons[i].disabled = false;
        }

        // reset heart
        const hearts = document.querySelectorAll('.tries')
        for (let i = 0 ; i < hearts.length; i ++) {
            hearts[i].children[0].src = 'images/liveHeart.png'
        }
        this.missed = 0;
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

     }
 }