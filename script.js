/*
Rock Paper Scissors Project
By richiegecko513
22-04-05
*/

/*
TODO LIST
-game() function
    -called gameRound within this one to play multiple rounds
    -keep score of winners for 5 rounds
    -whoever has most wins is declared winner
*/

const weapon = ['Rock','Paper','Scissors']
let response
let win
let lose 

function computerPlay() {
    choice = weapon[Math.floor(Math.random() * weapon.length)]
    return choice
};

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            if(computerSelection == "Paper"){
                response = "You lose!"
                return response
            }else if(computerSelection == "Scissors"){
                response = "You win!"
                return response
            }else{
                response = "It's a tie!"
                return response
            }
           
        case 'paper':
            if(computerSelection == "Rock"){
                response = "You win!"
                return response
            }else if(computerSelection == "Scissors"){
                response = "You lose!"
                return response
            }else{
                response = "It's a tie!"
                return response
            }
            
        case 'scissors':
            if(computerSelection == "Rock"){
                response = "You lose!"
                return response
            }else if(computerSelection == "Paper"){
                response = "You win!"
                return response
            }else{
                response = "It's a tie!"
                return response
            }
            
    
        }
}
let playerWin = []
let compWin = []

/*function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock paper or scissors?")
        console.log(playerSelection)
        let computerSelection = computerPlay();
        console.log(computerSelection)
        playRound(playerSelection,computerSelection)
        switch(response){
            case "You win!":
                playerWin.push(1)
                console.log("You win the game!")
                break;
            case "You lose!":
                compWin.push(1)
                console.log("You lose the game!")
                break;
            case "It's a tie!":
                console.log("It's a tie!")
                break;
        
       }
    }
    if(playerWin > compWin){
        response = "You have won!"
        return response
    }else{
        response = "You have lost!"
        return response
    }
   
}
*/

const buttons = document.querySelectorAll('button');
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors');

buttons.forEach((button) => {
    button.addEventListener("click", e =>{
        if(e.target.matches("#rock")){
            let playerSelection = 'rock'
            console.log(playerSelection)
            let computerSelection = computerPlay()
            console.log(computerSelection)
            console.log(playRound(playerSelection,computerSelection))
        }else if(e.target.matches('#paper')){
            let playerSelection = 'paper'
            console.log(playerSelection)
            let computerSelection = computerPlay()
            console.log(computerSelection)
            console.log(playRound(playerSelection,computerSelection))
        }else if(e.target.matches('#scissors')){
            let playerSelection = 'scissors'
            console.log(playerSelection)
            let computerSelection = computerPlay()
            console.log(computerSelection)
            console.log(playRound(playerSelection,computerSelection))
        }
    })
})

console.log(playerSelection)
const computerSelection = computerPlay();
console.log(computerSelection)
playRound(playerSelection,computerSelection)


//console.log(game())
