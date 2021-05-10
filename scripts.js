
let letters = ["A","B","C","D","E","F","G","H"
,"I","J","K","L","M","N","O","P","Q","R"
,"S","T","U","V","W","X","Y","Z", ]
let chars = () => {
    // creates letter buttons in the window
    for (let i = 0; i < letters.length; i++){
        let buttons = document.createElement('button')
        buttons.innerHTML = letters[i]
        let letterBank = document.querySelector("#letterBank")
        letterBank.append(buttons)
        let clickedButton = buttons.innerHTML
        buttons.classList.add("buttonstyle") // sets class of buttonstyle to buttons when iterating over letters array
        buttons.addEventListener("click", () => {buttonClicked(clickedButton)}
        // on click it checks if letter is present in correctAnswer string 
        )
    }
}
var correctAnswer = '';
let totalGuess = 6; // number of guesses user starts with
let prediction = []; // will hold the users selected chars
let guessWordStatus = null;

let wordBank = [
    ["skateboarding", "rugby", "taekwondo", "weightlifting", "equestrian", "handball", "pentathlon","badminton"
], ["nonstop","forever", "controlla", "Headlines", "omerta", "over", "jungle", "uptown", "Legend", "sucessful", "fear", "passionfruit", "HYFR", "Poundcake"
], ["gerrymandering", "onomatopoeia", "effervescent", "dastardly", "quintessential", "sanctimonious", "equilibrium"
]
];
     // TODO if category choosen display category in a tag on page  
let chooseWord = () => {
    // selects a random category and random word from that catgory and displays picture associated with that category
    let chosenCategory = wordBank[Math.floor(Math.random() * wordBank.length)]
    correctAnswer = chosenCategory[Math.floor(Math.random() * wordBank.length)].toUpperCase()
    if(chosenCategory === wordBank[0]){
        console.log("Olympic Sports")
        document.querySelector("img").src = "images/olympics.png"
        document.getElementById("category").innerHTML = "The category is 'Olympic Sports'"
    }else if (chosenCategory === wordBank[1]){
        console.log("Drake Songs")
        document.querySelector("img").src = "images/giphy.gif"
        document.getElementById("category").innerHTML = "The category is 'Drake Songs'"
    }else if (chosenCategory === wordBank[2]){
        console.log("Bad Ass Words")
        document.getElementById("category").innerHTML = "The category is 'Bad Ass Words'"
    }
    console.log(correctAnswer)
    return correctAnswer
}

let guessWord = () =>{
    // sets value of guesswordstatus and swaps letters for underlines
    guessWordStatus = correctAnswer.split("").map(letter => (prediction.indexOf(letter) >= 0 ? letter : " __ ")).join("")
    document.getElementById("answer").innerHTML = guessWordStatus
    console.log(guessWordStatus)
    if(guessWordStatus === correctAnswer){
    console.log("winner")
    }
}

let buttonClicked = (clickedButton) =>{
        prediction.indexOf(clickedButton) === -1 ? prediction.push(clickedButton) : null; //if button clicked doesnt exist in word push clicked button to incorrect array and set button null
        if(correctAnswer.indexOf(clickedButton) >= 0){ // if clicked button is correct update wordd to display button selected
                guessWord()
        }else if(correctAnswer.indexOf(clickedButton) === -1){
            alert(`The letter "${clickedButton}" doesn't exist please try again`)
            document.getElementById("wrong").innerHTML = `Last Wrong Letter : ${clickedButton}`
            totalGuess -=1
            document.getElementById("lives").innerHTML = `Lives: ${totalGuess}`
        if(totalGuess <= 0){
            alert("Game Over Loser")
            reset()
        }
        
    }
    
}

document.getElementById("wrong").innerHTML = `Last Wrong Letter : `
document.getElementById("lives").innerHTML = `Lives : ${totalGuess}` // updating lives



let resetButton = document.getElementById("reset") // reset game button
let reset = () => {
    location.reload()
}
// TODO 
// CRAETE WINNING CONDITION
// swap alerts for modals
// STYLE WITH HANGMAN ANIMATION 
// make mobile friendly
// decide on wether i want to hang a man


       
chars()
chooseWord()
guessWord()