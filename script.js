/*
Rock Paper Scissors Project
By richiegecko513
22-04-05
*/

/*
TODO LIST
Display the running score, and announce a winner of the game once one player reaches 5 points.
*/


const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result')
const buttonDiv = document.querySelector('.buttonDiv')

roundResult = document.createElement('p')
resultDiv.appendChild(roundResult)
const playerScore = document.querySelector('#playerScore')
const compScore = document.querySelector('#compScore')
resultDiv.appendChild(playerScore)
resultDiv.appendChild(compScore)
playerScore.style.cssText = 'size: 25px;'
compScore.style.cssText = 'size:25px;'
const finalResult = document.createElement('p')
resultDiv.appendChild(finalResult)

const newGame = document.createElement('button')
newGame.textContent = "Restart"
buttonDiv.appendChild(newGame)
newGame.style.visibility="hidden";
let playWin = 0;
let compWin = 0;

// get player input
function getPlayerChoice()
{
  let playerSelection
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(e.target.matches("#rock"))
            {
                playerSelection = 'rock'
                roundResult.textContent= playRound(playerSelection)
            }
            else if(e.target.matches("#paper"))
            {
                playerSelection = 'paper'
                roundResult.textContent= playRound(playerSelection)
            }
            else if(e.target.matches("#scissors"))
            {
                playerSelection = 'scissors'
                roundResult.textContent= playRound(playerSelection)
            }
          winner()
        })
    })
}

//randomly chooses r p or s for computer
function computerPlay() 
{
    const weapon = ['Rock','Paper','Scissors']
    choice = weapon[Math.floor(Math.random() * weapon.length)]
    return choice
};

//plays one round of rps 
function playRound(playerSelection){
    let computerSelection = computerPlay()
    let response
    switch(playerSelection)
    {
        case 'rock':
            if(computerSelection == "Paper")
            {
                response = "You lose!"    
            }
            else if(computerSelection == "Scissors")
            {
                response = "You win!"
            }
            else
            {
                
                response = "It's a tie!"
            }
            break
        case 'paper':
            if(computerSelection == "Rock")
            {
                response = "You win!"
            }
            else if(computerSelection == "Scissors")
            {
                response = "You lose!"
            }
            else
            {
                response = "It's a tie!"
            }
            break
        case 'scissors':
            if(computerSelection == "Rock")
            {
                response = "You lose!"
            }
            else if(computerSelection == "Paper")
            {
                response = "You win!"
            }
            else
            {
                response = "It's a tie!"
            }   
            break
      }
    return runningScore(response)
}

function playNewGame() {
    newGame.addEventListener('click', () => {
        window.location.reload()
    })
}

//keeps a running count of the score 
function runningScore(response)
{
    switch(response){
        case "You win!":
            playWin++
            playerScore.textContent = `Player Score= ${playWin}`
            compScore.textContent = `Computer Score= ${compWin}`
            break;
        case "You lose!":
            compWin++
            playerScore.textContent = `Player Score= ${playWin}`
            compScore.textContent = `Computer Score= ${compWin}`
            break;
        case "It's a tie!":
            console.log("It's a tie!")
            playerScore.textContent = `Player Score= ${playWin}`
            compScore.textContent = `Computer Score= ${compWin}`
            break;
    }
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}
//takes player and computer scores and computes winner
function winner()
{
    if(playWin == 5 || compWin == 5)
        {
            if(playWin > compWin)
            {
                finalResult.textContent = "You won the game!"
                disableButtons()
                newGame.style.visibility="visible";
                playNewGame()
                
            }
            if(compWin > playWin)
            {
                finalResult.textContent = "You lost to a computer!"
                disableButtons()
                newGame.style.visibility="visible";
                playNewGame()
            }
        }
}

//runs games of rps until one player reaches a score of 5, and declares that player the winner.
function game(){
    playerSelection = getPlayerChoice()
    computerSelection = computerPlay()
    playRound(playerSelection,computerSelection)
    console.log(playRound(playerSelection,computerSelection)) 
    console.log(playerSelection) 
    console.log(computerSelection)
    console.log(runningScore()) 
    console.log(winner()) 

}

game()
