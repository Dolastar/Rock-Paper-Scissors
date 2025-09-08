
function getComputerChoice(){
    let result = Math.random() * 3
    result = Math.floor(result) 
    if (result === 0){
        return "rock"
    }
    else if (result === 1){
        return "paper"
    }
    else {
        return "scissors"
        
    }
};

const choice = document.querySelector("#choice")

spanText = document.createElement("span")
result = document.querySelector("#result")
const finalText = document.createElement("span")
const final = document.querySelector("#final")

let computerScore = 0
let playerScore = 0

function playRound(human){
    if (playerScore < 5 && computerScore < 5) {

        let computerChoice = getComputerChoice()
        let humanChoice = human

        if (computerChoice == "rock"){
            if (humanChoice == "rock"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Tie!!`
                choice.appendChild(divText)
            }
                
            else if (humanChoice == "paper"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Player wins!!`
                choice.appendChild(divText)
                playerScore++
            }
            else if (humanChoice == "scissors"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Computer wins!!`
                choice.appendChild(divText)
                computerScore++
            }
            
        }

        else if (computerChoice == "paper"){
            if (humanChoice == "paper"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Tie!!`
                choice.appendChild(divText)
            }
            else if (humanChoice == "scissors"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Player wins!!`
                choice.appendChild(divText)
                playerScore++
            }
            else if (humanChoice == "rock"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Computer wins!!`
                choice.appendChild(divText)
                computerScore++
            }
                
        }

        else {
            if (humanChoice == "scissors"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Tie!!`
                choice.appendChild(divText)
            }
            else if (humanChoice == "rock"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Player wins!!`
                choice.appendChild(divText)
                playerScore++
            }
            else if (humanChoice == "paper"){
                const divText = document.createElement("div")
                divText.textContent = `Computer: ${computerChoice}, Player: ${humanChoice}, Computer wins!!`
                choice.appendChild(divText)
                computerScore++
            }
            
        } 

        spanText.textContent = `Computer: ${computerScore}, Player: ${playerScore}` 
        result.appendChild(spanText) 

        if (playerScore === 5 || computerScore === 5){
            if (playerScore > computerScore){
                spanText.textContent = `End of Round, Player wins!! ${playerScore}-${computerScore}` 
                result.appendChild(spanText)
            }
            else{
                spanText.textContent = `End of Round, Computer wins!! ${computerScore}-${playerScore}` 
                result.appendChild(spanText)
            }
        }
        
            
        
    } 
    else{
        finalText.textContent = "Kindly reload to play another round"
        final.appendChild(finalText)
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
button.addEventListener("click", () => {
const playerChoice = button.textContent.toLowerCase();
playRound(playerChoice);
});
});