function getComputerChoice() {
    let arr = ['rock','paper','scissor'];
    return arr[Math.floor(Math.random()*3)];
}

function getUserChoice() {
    let u = prompt("Enter your choice > ");
    return u.toLowerCase();
}

function playRound(computerChoice, userChoice) {
    if((computerChoice=='rock'&&userChoice=='scissor')||(computerChoice=='paper'&&userChoice=='rock')||(computerChoice=='scissor'&&userChoice=='paper')) {
        console.log("You LOSE!, ", {computerChoice}, " Beats", {userChoice} );
    }
    if((computerChoice=='rock'&&userChoice=='rock')||(computerChoice=='paper'&&userChoice=='paper')||(computerChoice=='scissor'&&userChoice=='scissor')) {
        console.log("DRAW!, ", {computerChoice}, " is same", {userChoice} );
    }
    if((computerChoice=='rock'&&userChoice=='paper')||(computerChoice=='paper'&&userChoice=='scissor')||(computerChoice=='scissor'&&userChoice=='rock')) {
        console.log("You WIN!, ", {computerChoice}, " Loses to", {userChoice} );
    }
}