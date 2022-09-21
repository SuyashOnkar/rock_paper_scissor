function getComputerChoice() {
   return Math.floor(Math.random() * 2) + 1;
    
}

const ComputerSelection = getComputerChoice();

function getUserChoice() {
    let c = prompt("Enter >> ");
    c.toLowerCase();
    if(c=="rock"){return 1}
    if(c=="paper"){return 2}
    if(c=="scissor"){return 3}
}

const UserSelection = getUserChoice();

function playRound(ComputerChoice, UserChoice) {
    if(UserChoice == 1) {
        if(ComputerChoice==1){return "Draw, Rock and Rock"}
        if(ComputerChoice==2){return "Lose, Rock Loses to Paper"}
        if(ComputerChoice==3){return "Win, Rock beats Scissors"}
    }
    if(UserChoice == 2) {
        if(ComputerChoice==1){return "Win, Paper Beats Rock"}
        if(ComputerChoice==2){return "Draw, Paper and Paper"}
        if(ComputerChoice==3){return "Lose, Paper Loses to Scissors"}
    }
    if(UserChoice == 3) {
        if(ComputerChoice==1){return "Lose, Scissor Loses to Rock"}
        if(ComputerChoice==2){return "Win, Scissor Beats Paper"}
        if(ComputerChoice==3){return "Draw, Scissors and Scissors"}
    }
}

console.log(playRound(ComputerSelection,UserSelection));