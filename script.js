/*
Rock Paper Scissors Project
By richiegecko513
22-04-05
*/

/*
TODO LIST
-computerPlay function 
    -randomly generate choice of r, p or s
    -return the output
-gameRound function 
    -take user input for playerSelection choice
    -take output from computerPlay for computerSelection choice
    -return a string declaring winner
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
}

function playRound(playerSelection, computerSelection){
   // let playerSelection = prompt("Rock,paper or scissors?")
    //console.log(playerSelection)
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
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){

}