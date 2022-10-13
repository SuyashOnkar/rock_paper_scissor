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
        return -1; // -1 = Lose 0 = Draw 1 = Win
    }
    if((computerChoice=='rock'&&userChoice=='rock')||(computerChoice=='paper'&&userChoice=='paper')||(computerChoice=='scissor'&&userChoice=='scissor')) {
        console.log("DRAW!, ", {computerChoice}, " is same", {userChoice} );
        return 0;
    }
    if((computerChoice=='rock'&&userChoice=='paper')||(computerChoice=='paper'&&userChoice=='scissor')||(computerChoice=='scissor'&&userChoice=='rock')) {
        console.log("You WIN!, ", {computerChoice}, " Loses to", {userChoice} );
        return 1;
    }
}

function game(){
    let win = 0, lose = 0, draw = 0;
    
    for(let i=0;i<5;i++){
        let x = playRound(getComputerChoice(),getUserChoice());
        if(x==1){
            win++;
        }
        if(x==-1){
            lose++;
        }
        if(x==0){
            draw++;
        }
    }

    if(win>lose){
        alert("YOU WIN!");
    }
    if(win<lose){
        alert("YOU LOSE");
    }
    if(win==lose){
        alert("DRAW! zzzzzzz");
    }

    
}
