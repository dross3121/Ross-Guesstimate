
let letters = ["A","B","C","D","E","F","G","H"
,"I","J","K","L","M","N","O","P","Q","R"
,"S","T","U","V","W","X","Y","Z",]
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
    "uptown", "Legend", "successful", "fear",
    "passionfruit", "HYFR", "Poundcake"],
    ["gerrymandering", "onomatopoeia", "effervescent",
    "dastardly", "quintessential", "sanctimonious",
    "equilibrium"]
];

let picksWord = () => {
    // selects a random category and random word from that catgory and displays picture associated with that category
    let chosenCategory = answerBank[Math.floor(Math.random() * answerBank.length)]
    answer = chosenCategory[Math.floor(Math.random() * chosenCategory.length)].toUpperCase()
    if(chosenCategory === answerBank[0]){
        document.querySelector("img").src = 
        "images/olympics.png"
        document.getElementById("category").innerHTML = 
        "The category is 'Olympics Sports'"
    }else if (chosenCategory === answerBank[1]){
        document.querySelector("img").src = 
        "images/giphy.gif"
        document.getElementById("category").innerHTML = 
        "The category is 'Drake Songs'"
    }else if (chosenCategory === answerBank[2]){
        document.getElementById("category").innerHTML = 
        "The category is 'Random Words'"
    }
    let getHint = document.getElementById("hint")
    getHint.addEventListener("click", function(){
        if(chosenCategory === answerBank[0]){
            document.getElementById("insertHintHere").innerHTML = "Hints: The Name of an Olympic Sport"   
        }if(chosenCategory === answerBank[1]){
            document.getElementById("insertHintHere").innerHTML = "Hints: The Name an of A popular Drake Song"
        }if(chosenCategory === answerBank[2]){
            document.getElementById("insertHintHere").innerHTML = "Hints: Try using A vowel 'A, E, I , O , U , Y'"
        }
        })

    return answer
}

let inspectWord = () =>{
    // checks if letter is in the answer and displays it if it exist else it remiains hidden
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
        //if button clicked doesn't exist in predictionArr button is pushed to array and removd from board
        predictionArr.indexOf(clickedButton) === -1 ? predictionArr.push(clickedButton) : null; 
        if(answer.indexOf(clickedButton) >= 0){ 
            // if clicked button exist in answer string update word to display button selected by calling the guessWord func
            document.getElementById("blink").innerHTML = "Good guess"
            inspectWord()
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
    inspectWord()
    ___
    
    
    
    
