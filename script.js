/*
Rock Paper Scissors Project
By richiegecko513
22-04-05
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

function game(){
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
//const playerSelection = prompt("Rock, paper, scissors?")

//const computerSelection = computerPlay();

console.log(game())
