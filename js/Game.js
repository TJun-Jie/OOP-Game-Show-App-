/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('There is bravery in being soft'),
            // new Phrase('You get what you give'),
            // new Phrase('Collect beautiful moments'),
            // new Phrase('Step by step Day by day'),
            // new Phrase('When nothing goes right go left')
        ];
        this.activePhrase = null;
     }

     startGame() {
        //  hide the start screen to show the main screen
        document.querySelector('.start').style.display = 'none'
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        // reset the start screen
        document.querySelector('#overlay').classList.remove('win')
        document.querySelector('#overlay').classList.remove('lose')

        

        // this.resetGame()

         

     }

    //  get a random phrase from the phrases array and set the active phrase with it
     getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        this.activePhrase = this.phrases[randomNumber];
     }

     handleInteraction(letterButton) {
        //  prevent user from clicking the same keyboard button 
         if (letterButton.disabled ===true) {
             return console.log('disabled')
        } 
        // only allow user to type the key if it is not disabled
        else{
                //  disable button after it is pressed
                letterButton.disabled = true;
            
            // if user clicked the right letter
            if (this.activePhrase.checkLetter(letterButton.textContent)) {
                // show the letter on the screen
                this.activePhrase.showMatchedLetter(letterButton.textContent)
                // add 'correct' class to button 
                letterButton.classList.add('chosen')
                // if all letters have been guessed and call check for win, if won,  call the game over method 
                if(this.checkForWin()) {
                    this.gameOver();
                }
            // if user clicked the wrong letter
            } else {
                // add 'wrong' button class
                letterButton.classList.add('wrong')
                // remove life
                this.removeLife();
            }
        }
     }


     removeLife() {
        //  increased missed property by 1 everytime user guesses wrongly
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

    //  check if all the letters have been spliced out, which means the user has revealed all the letters
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
         const message = $('#game-over-message')
         message.css('display', 'none')

         
        if (this.checkForWin()) {
            start.classList.add('win')  
            start.style.display = 'block';
            this.resetGame();
            message.text('You have won!');
            message.slideDown('slow');

        } 
        else {
            start.style.display = 'block';
            start.classList.add('lose')  
            this.resetGame();
            message.text('You have lost!');
            message.slideDown('slow');          
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
     }
 }