/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /*
create a new instance of game class

add click listner to start game button and call startGame() when clicked

add click listener to all the letter buttons and call handleInteraction() method from the game object  (add to div with id of section)

startGame(): 
remove all li elements 
reset all css class for all the letter buttons
reset all heart images
 */



const game = new Game();


const button =  document.querySelector('#btn__reset');
button.addEventListener('click', () => {
    game.startGame();
})

const keys = document.querySelector('#qwerty');
keys.addEventListener('click', (event) => {
    // handleInteraction(event);
    if(event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target)
    }
})