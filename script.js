let animals = [
    "bear",
    "cat",
    "dog",
    "duck",
    "snake"
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
};

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
    } else {
        indexMatch++
        wrongGuesses++
        hangmanUpdateImage(wrongGuesses)
    }
}


function winCheck(winningWordArray, playerWinArray, indexMatch) {
    let checker = (arr, target) => target.every(v => arr.includes(v));

    if(checker(winningWordArray, playerWinArray) == true && winningWordArray.length === playerWinArray.length) {
        alert("OMG YOU WON")
        newGame();
    }
}

function hangmanUpdateImage(wrongGuesses){

    document.getElementById("hangman_image").src = "./images/" + wrongGuesses + ".png"

    if (wrongGuesses >= 6) {
        document.getElementById("lost").innerHTML = "YOU LOST!";
        document.getElementById("keyboard").innerHTML = ""
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
}



pickWord();
createButtons();
