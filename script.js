let animals = [
    "bear",
    "cat",
    "dog",
    "duck",
    "snake"
]

let winningWord="";
let lettersChosen = [];
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

    lettersChosen.push(letterChoice)


    console.log(lettersChosen)
    console.log(winningWord[indexMatch])
    console.log(indexMatch)
    console.log(lettersChosen.length)
    console.log(winningWord.length)
    console.log(lettersChosen.join(""))
    console.log(wrongGuesses)



    if(lettersChosen[indexMatch] !== winningWord[indexMatch]){
        lettersChosen.pop();
        wrongGuesses++;
        hangmanUpdateImage(wrongGuesses);

    } else if (lettersChosen.join("") === winningWord){
        alert("you Won!")
    } else if (lettersChosen[indexMatch] === winningWord[indexMatch]){
        indexMatch++  
    } else {
        alert("error")
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
// guessHandler();