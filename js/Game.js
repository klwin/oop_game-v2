/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let Game = class {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    // Create phrases for use in game
    createPhrases() {
        let phraseOne = new Phrase('life is like a box of chocolates');
        let phraseTwo = new Phrase('there is no trying');
        let phraseThree = new Phrase('may the force be with you');
        let phraseFour = new Phrase('you have to see the matrix of yourself');
        let phraseFive = new Phrase('you talking to me');
        let arrayOfPhrases = [phraseOne, phraseTwo, phraseThree, phraseFour, phraseFive];
        return arrayOfPhrases;
    }
    // Selects random phrase from phrases property
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * 5);
        return this.phrases[randomNumber];
    }
    // Begins game by selecting a random phrase and displaying it to user
    startGame() {
        let overlayElement = document.getElementById('overlay');
        overlayElement.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    // Checks for winning move
    checkForWin() {
        let condition = false;
        let letterElements = document.getElementsByClassName('hide');
        if (letterElements.length == 0) {
            condition = true;
        }
        return condition;
    }
    // Increases the value of the missed property
    // Removes a life from the scoreboard
    // Checks if player has remaining lives and ends game if player is out
    removeLife() {
        this.missed += 1;
        let triesElement = document.getElementsByClassName('tries');
        triesElement[this.missed-1].firstElementChild.src = "images/lostHeart.png"
        if (this.missed == 5) {
            this.gameOver(false);
        }
    }
    // Displays game over message
    gameOver(gameWon) {
       let overlayElement = document.getElementById('overlay');
       overlayElement.style.display = "block";
       let gameOverMessageElement = document.getElementById('game-over-message');
       overlayElement.classList.remove('start');
       if (gameWon) {
        gameOverMessageElement.textContent = "Great Job!";
        document.getElementsByClassName('title')[0].classList.remove('infinite','bounce');
        document.getElementsByClassName('title')[0].classList.add('tada');
        overlayElement.classList.remove('lose');
        overlayElement.classList.add('win');
       } else {
        gameOverMessageElement.textContent = "Sorry, better luck next time!";
        document.getElementsByClassName('title')[0].classList.remove('infinite','bounce');
        document.getElementsByClassName('title')[0].classList.add('hinge');
        overlayElement.classList.remove('win');
        overlayElement.classList.add('lose');
       }
    }
    // Handles onscreen keyboard button clicks
    handleInteraction(button) {
        let letter = button.textContent;
        if(this.activePhrase.checkLetter(letter)) {
            if(!button.classList.contains('chosen')) {
                button.classList.add('chosen');
                button.disabled = true;
                this.activePhrase.showMatchedLetter(letter);
                if(this.checkForWin()) {
                    this.gameOver(true);
                }
            }
            
        } else {
            if(!button.classList.contains('wrong')) {
                button.classList.add('wrong');
                button.disabled = true;
                this.removeLife();
            }
        }
    }
}   