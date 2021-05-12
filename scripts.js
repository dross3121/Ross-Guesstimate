
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
        buttons.addEventListener("click", (e) => {buttonClicked(clickedButton, e.target)}) // when clicked event checks if letter is present in correctAnswer string  
    }
}

let lives = 10; // number of guesses user starts with
let predictionArr = []; // will hold the users selected chars
let answer = '';
let word = null;

let answerBank = [
    ["skateboarding", "rugby", "taekwondo", 
    "weightlifting", "equestrian", "handball", 
    "pentathlon","badminton"], 
    ["nonstop","forever", "controlla", "Headlines",
    "omerta", "over", "jungle",
    "uptown", "Legend", "sucessful", "fear",
    "passionfruit", "HYFR", "Poundcake"],
    ["gerrymandering", "onomatopoeia", "effervescent",
    "dastardly", "quintessential", "sanctimonious",
    "equilibrium"]
];

let picksWord = () => {
    // selects a random category and random word from that catgory and displays picture associated with that category
    let chosenCategory = answerBank[Math.floor(Math.random() * answerBank.length)]
    answer = chosenCategory[Math.floor(Math.random() * answerBank.length)].toUpperCase()
    if(chosenCategory === answerBank[0]){
        document.querySelector("img").src = 
        "images/olympics.png"
        document.getElementById("category").innerHTML = 
        "The category is 'Olympics'"
    }else if (chosenCategory === answerBank[1]){
        document.querySelector("img").src = 
        "images/giphy.gif"
        document.getElementById("category").innerHTML = 
        "The category is 'Drake'"
    }else if (chosenCategory === answerBank[2]){
        document.getElementById("category").innerHTML = 
        "The category is 'Bad Words'"
    }
    return answer
}

let guessWord = () =>{
    // checks value of word and swaps letters for underlines
    word = answer.split("").map(letter => 
        (predictionArr.indexOf(letter) >= 0 ? letter : " _ ")).join("")
        document.getElementById("answer").innerHTML = word
        if(word === answer){
            // winning condition
            document.getElementById("blink").innerHTML = "WINNER !!!"
            setTimeout(reset, 7000)
        }
    }

    let buttonClicked = (clickedButton, e) =>{
        predictionArr.indexOf(clickedButton) === -1 ? predictionArr.push(clickedButton) : null; //if button clicked doesn't exist in predictionArr push clicked button to array and set button null
        if(answer.indexOf(clickedButton) >= 0){ // if clicked button is correct update word to display button selected
            document.getElementById("blink").innerHTML = "Good guess"
            guessWord()
        }if((answer.indexOf(clickedButton) === -1) && (predictionArr.includes(clickedButton) === true)){
            document.getElementById("blink").innerHTML = "Try Again"
            lives -=1
            document.getElementById("wrong").innerHTML = `Last Wrong Letter : ${clickedButton}`
            document.getElementById("lives").innerHTML = `Lives: ${lives}`
        }if(lives <= 0){
            document.getElementById("blink").innerHTML = "YOU LOSE GAME OVER"
            document.getElementById("answer").innerHTML = `Correct answer was "${answer}"`


            setTimeout(reset, 7000)
        }
        
        e.style.display = "none" // removes letter when clicked
    }
    
    document.getElementById("wrong").innerHTML = `Last Wrong Letter : ` // updates to current incorrect guess
    document.getElementById("lives").innerHTML = `Lives : ${lives}` // updating lives
    
    
    
    let resetButton = document.getElementById("reset") // reset game button
    let reset = () => {
        location.reload()
    }
    
    chars()
    picksWord()
    guessWord()
    
    // TODO add api from giphy
    // let url = "http://api.giphy.com/v1/gifs/search?q=drake&api_key=Z5fGhHGaZZT33f028vt42A4ZyJCbEALG&limit=5" 
    // fetch(`${url}`  )
    //             .then(res => res.json())
    //         .then(Json => {
    //              open(Json.data[0].url)
                   
    //             })       
    //           .catch( err => console.log(err, " error here")) 
    // TODO 
    // style with hangman replica ??
    // make for mobile devices
    
    
    
