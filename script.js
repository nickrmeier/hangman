let animals = [
    "bear",
    "cat",
    "dog",
    "duck",
    "snake"
]

let winningWord="";
let lettersChosen = [];
let playerWinArray = [];
let indexMatch = 0
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
    console.log(winningWordArray)

    lettersChosen.push(letterChoice)
    
    console.log(lettersChosen)
    console.log(winningWord[indexMatch])
    console.log(indexMatch)
    console.log(lettersChosen.length)
    console.log(winningWord.length)
    console.log(wrongGuesses)
    console.log(playerWinArray)

    if(winningWordArray.includes(lettersChosen[indexMatch])){
        console.log("this works")
        playerWinArray.push(lettersChosen[indexMatch])
        console.log(playerWinArray)
        indexMatch++
        winCheck(winningWordArray, playerWinArray, indexMatch);
    } else {
        indexMatch++
        wrongGuesses++
        alert("THIS might WORKS")
        hangmanUpdateImage(wrongGuesses)
    }
    

    


    // if(lettersChosen[indexMatch] !== winningWord[indexMatch]){
    //     lettersChosen.pop();
    //     wrongGuesses++;
    //     hangmanUpdateImage(wrongGuesses);

    // } else if (lettersChosen.join("") === winningWord){
    //     alert("you Won!")
    // } else if (lettersChosen[indexMatch] === winningWord[indexMatch]){
    //     indexMatch++  
    // } else {
    //     alert("error")
    // }  

}

function winCheck(winningWordArray, playerWinArray, indexMatch) {
    let checker = (arr, target) => target.every(v => arr.includes(v));

    if(checker(winningWordArray, playerWinArray) == true && winningWordArray.length === playerWinArray.length) {
        alert("OMG YOU WON")
    }


}


function hangmanUpdateImage(wrongGuesses){

    document.getElementById("hangman_image").src = "./images/" + wrongGuesses + ".png"

    if (wrongGuesses >= 6) {
        document.getElementById("lost").innerHTML = "YOU LOST!";
        document.getElementById("keyboard").innerHTML = ""
    }

}

pickWord();
createButtons();
