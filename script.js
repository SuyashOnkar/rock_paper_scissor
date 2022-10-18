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

const b = document.getElementById("button-1");

let x=0,y=0,z=0;

const user = document.getElementById("userScore");
const computer = document.getElementById("computerScore");

b.addEventListener('click', function(){
    
    let a = playRound(getComputerChoice(),getUserChoice());
    if(a==1){
        x++;
        user.textContent = x;
        if(x==5){
            alert("YOU WIN!!");
        }
    }
   
    if(a==-1){
        z++;
        computer.textContent = z;
        if(z==5){
            alert("YOU LOSE :(");
        }
    }
    
});

