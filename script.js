let userName = prompt ("What is your name")
let userScore = 0
let computerScore = 0


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

function getHumanChoice(){
    return prompt("rock! paper!! scissors!!!");
}

function playRound(){
     let humanChoice = getHumanChoice().toLowerCase()
     let computerChoice = getComputerChoice()

    if (computerChoice == "rock"){
        if (humanChoice == "rock"){
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n rock cancels rock!`}
        else if (humanChoice == "paper"){
            userScore = userScore + 1
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n paper beats rock \n ${userName} wins!!`
        }
        else if (humanChoice == "scissors")
             {
            computerScore = computerScore +1
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n rock beats scissors \n Computer wins!!`
        }
        else{
            return `Dear ${userName}, kindly use a valid input`
        }
        
    }

   else if (computerChoice == "paper"){
        if (humanChoice == "paper"){
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n paper cancels paper!`}
        else if (humanChoice == "scissors"){
            userScore = userScore + 1
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n scissors beats paper \n ${userName} wins!!`
        }
        else if (humanChoice == "rock")
            {
            computerScore = computerScore +1
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n paper beats rock \n Computer wins!!`
        }
        else{
            return `Dear ${userName}, kindly use a valid input`
        }
        
        
    }

     else;
     {
        if (humanChoice == "scissors"){
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n scissors cancels scissors!`}
        else if (humanChoice == "rock"){
            userScore = userScore + 1
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n rock beats scissors \n ${userName} wins!!`
        }
        else if (humanChoice == "paper")
            {
            computerScore = computerScore +1
            return `\n ${userName}: ${humanChoice} \n Computer: ${computerChoice} \n scissors beats paper \n Computer wins!!`
        }
        else{
            return `Dear ${userName}, kindly use a valid input`
        }
        
        
    }
}

function playGame() {
    console.log(`Round 1 ${playRound()}`)
    console.log(`Round 2 ${playRound()}`)
    console.log(`Round 3 ${playRound()}`)
    console.log(`Round 4 ${playRound()}`)
    console.log(`Round 5 ${playRound()}`)

}


playGame()

console.log(`Final Score: \n ${userName}: ${userScore} \n Computer: ${computerScore}`)
if (userScore > computerScore) {
    console.log(`You win!!`)
}
else if (userScore === computerScore){
    console.log(`Game ends in a tie!!`)
}
else{
    console.log("Computer wins!!")
}