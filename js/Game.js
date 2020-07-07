/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



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

    //  get a random phrase and set the active phrase with it
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
        // reset buttons to their initial state
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

        // reset heart to its initial state
        const hearts = document.querySelectorAll('.tries')
        for (let i = 0 ; i < hearts.length; i ++) {
            hearts[i].children[0].src = 'images/liveHeart.png'
        }
        this.missed = 0;

        // create new phrase for user and display it 
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

     }
 }