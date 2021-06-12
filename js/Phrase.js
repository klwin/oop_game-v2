/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

let Phrase = class {
    constructor(phrase) {
       this.phrase = phrase.toLowerCase(); 
    }
    //Display phrase on game board
    addPhraseToDisplay() {
        let htmlPhrase = '<ul>';
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase.charAt(i) == ' ') {
                htmlPhrase += '<li class="space"> </li>'
            }
            else {
                htmlPhrase += '<li class="hide letter '+this.phrase.charAt(i)+'">'+this.phrase.charAt(i)+'</li>'
            }
        }
        htmlPhrase += '</ul>';
        document.getElementById('phrase').innerHTML = htmlPhrase;
    }
    // Checks if passed letter is in phrase
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        }
        return false;
    }
    // Displays passed letter on screen after a match is found
    showMatchedLetter(letter) {
        let matchedLetterElements = document.getElementsByClassName(letter);
        for (let element of matchedLetterElements) {
            element.classList.remove('hide');
            element.classList.add('show');
        }
    }
}