function getComputerChoice() {
   return Math.floor(Math.random() * 3) + 1;
}

// const ComputerSelection = getComputerChoice();

function getUserChoice() {
    let c = prompt("Enter >> ");
    c.toLowerCase();
    if(c=="rock"){return 1}
    if(c=="paper"){return 2}
    if(c=="scissor"){return 3}
}

// const UserSelection = getUserChoice();

/*
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
*/

function playRound1(ComputerChoice, UserChoice) {
    if(UserChoice == 1) {
        if(ComputerChoice==1){return 0}
        if(ComputerChoice==2){return -1}
        if(ComputerChoice==3){return 1}
    }
    if(UserChoice == 2) {
        if(ComputerChoice==1){return 1}
        if(ComputerChoice==2){return 0}
        if(ComputerChoice==3){return -1}
    }
    if(UserChoice == 3) {
        if(ComputerChoice==1){return -1}
        if(ComputerChoice==2){return 1}
        if(ComputerChoice==3){return 0}
    }
}

// console.log(playRound(ComputerSelection,UserSelection));

function game(){
    let win_counter = 0;
    for(let i=0;i<5;i++){
        const ComputerSelection = getComputerChoice();
        const UserSelection = getUserChoice();


        console.log(ComputerSelection);
        console.log(UserSelection);

        if(playRound1(ComputerSelection,UserSelection)==1){
            win_counter+=1;
            console.log("you win");
        } 
        
    }
    if (win_counter>2) {console.log("You Win!")}
    else {console.log("You Lose")}
}

game();