let animals = [
    "bear",
    "cat",
    "dog",
    "duck",
    "snake",
    "longword"
]

let winningWord="";
let lettersChosen = [];
let letterChoice = "";
let playerWinArray = [];
let indexMatch = 0;
let wrongGuesses = 0;

function pickWord() {
    winningWord = animals[Math.floor(Math.random() * animals.length)];
    console.log(winningWord);
    wordBlankFiller(winningWord);
};

function wordBlankFiller(winningWord){
    let blankSpaces = winningWord.length;
    let blank = "-"
    document.getElementById("word").innerHTML = blank.repeat(blankSpaces);
}

function createButtons(){
    let dynamicButtons = "abcdefghijklmnopqrstuvwxyz".split("").map(letter => 
        `<button class="btn btn-outline-primary" id='` + letter + `' onClick="guessHandler('` + letter + `')">
            ` + letter + `
        </button>`
        ).join('');

    document.getElementById("keyboard").innerHTML = dynamicButtons
};


function guessHandler(letterChoice){
    let winningWordArray = [];
    winningWordArray = winningWord.split('');

    lettersChosen.push(letterChoice)

    if(winningWordArray.includes(lettersChosen[indexMatch])){
        playerWinArray.push(lettersChosen[indexMatch])
        console.log(playerWinArray)
        indexMatch++
        winCheck(winningWordArray, playerWinArray, indexMatch);
        wordBlankFillerUpdate(winningWord, letterChoice)
    } else {
        indexMatch++
        wrongGuesses++
        hangmanUpdateImage(wrongGuesses)
        wrongCounter(wrongGuesses)
    }
}

function wrongCounter(wrongGuesses){
    document.getElementById("wrong_counter").innerHTML = wrongGuesses + " out of 6 wrong!"
}

function wordBlankFillerUpdate(winningWord, letterChoice) {
    console.log(winningWord)
    console.log(letterChoice)

if (winningWord.includes(letterChoice)){
    console.log('This letter is here')
}

}

function winCheck(winningWordArray, playerWinArray) {
    let checker = (arr, target) => target.every(v => arr.includes(v));

    if(checker(winningWordArray, playerWinArray) == true && winningWordArray.length === playerWinArray.length) {
        win(true);
    }
}

function win(bool) {
    if (bool){
        document.getElementById("lost").innerHTML = "you won!"
    } else {
        document.getElementById("lost").innerHTML = ""
    }
}

function hangmanUpdateImage(wrongGuesses){
    document.getElementById("hangman_image").src = "./images/" + wrongGuesses + ".png"
    if (wrongGuesses >= 6) {
        document.getElementById("lost").innerHTML = "YOU LOST!";
        document.getElementById("keyboard").innerHTML = ""
    } else {
        document.getElementById("lost").innerHTML = "";
    }
}

function newGame(){
    winningWord="";
    lettersChosen = [];
    letterChoice = "";
    playerWinArray = [];
    indexMatch = 0;
    wrongGuesses = 0;
    pickWord();
    hangmanUpdateImage(0);
    createButtons();
    wrongCounter(0);

    win(false)
}



pickWord();
createButtons();
