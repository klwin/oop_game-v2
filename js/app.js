/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let keyboard = document.getElementById('qwerty');
let keysElement = document.getElementsByClassName('key');
let triesElement = document.getElementsByClassName('tries');
let buttonElement = document.getElementById('btn__reset');
buttonElement.addEventListener('click', () => {
    // Reset Gameboard betweem Games
    for(element of keysElement) {
        element.classList.remove('wrong');
        element.classList.remove('chosen');
        element.disabled = false;
    }
    for(element of triesElement) {
        element.firstElementChild.src = "images/liveHeart.png"
    }
    game = new Game();
    game.startGame();
})

keyboard.addEventListener('click', (e) => {
    if(e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }
});

// Let players use their physical computer keyboard to enter guesses.
document.addEventListener('keydown', (e) => {
    for (element of keysElement) {
        if(element.innerText == e.key){
            game.handleInteraction(element);
        }
    }
   
    
});

//Add custom animations
window.onload = function(){
    document.getElementsByClassName('title')[0].classList.add('animated','infinite','bounce');
}