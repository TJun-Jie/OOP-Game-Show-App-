/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



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

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
         this.letters = this.removeSpaces();     
     }

     
     addPhraseToDisplay() {
         const ul = document.querySelector('#phrase ul');
        //  create Li for each letter and set the text content of Li as the letter
         for (let i = 0 ; i < this.phrase.length ; i ++) {
            const li  = document.createElement('li');
            // if the Li is a space add the space class
            if (this.phrase[i] === " ") {
                li.classList.add('space');
            } 
            // if the li is a letter add the letter class
            else {
                li.classList.add('letter')
            }
            li.textContent = this.phrase[i]
            // hide the letter from user
            li.classList.add('hide');
            ul.appendChild(li);      
         }
     }

     removeSpaces() {
         //Removing spaces with regex
         const withoutSpacesPhrase = this.phrase.replace(/\s/g , '')
         const lettersArr = withoutSpacesPhrase.split('');
         return lettersArr;
         
     }

     checkLetter(letter) {
        //  return true if letter is in phrase
         if (this.letters.includes(letter) ) {
             for (let i  = 0 ; i < this.letters.length ; i ++) {
                //  i -- to remove duplicate letters
                if(this.letters[i] === letter) {
                    this.letters.splice(i, 1) ; i -- 
                }
             }
             return true
        // if letter not in the pharse return false
         } else {
             return false
         }
     }

     showMatchedLetter(letter) {
        // select all the letters on the display
        const displayLetters  =document.querySelectorAll('#phrase li');
        for (let i = 0 ; i < displayLetters.length ; i ++) {
            // if the user guess correctly , change the class from hide to show
            if (displayLetters[i].textContent === letter) {
                displayLetters[i].classList.remove('hide')
                displayLetters[i].classList.add('show')
            }
        }
     }


 }

