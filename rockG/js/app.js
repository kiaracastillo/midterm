/* Kiara Castillo Magallanes
10/13/2022
Midterm 
Rock G

'Make a game of rock-paper-scissors using DIVs as the 
buttons to select one of four options: rock, paper, scissors, and guard.
Add a space for a score display on the screen. 
Start the score at zero. (this will be tied to an application/global variable)'

*/
let score = document.getElementById("score");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let guard = document.getElementById("guard");

//style rock div 
rock.style.backgroundColor = "#858f8c";
rock.style.height = "50px";
rock.style.width = "100px";
rock.style.float = "left";
rock.style.margin = "10px";

//style score div 
score.style.height = "50px";
score.style.width = "100px"

score.style.float = "left";
score.style.margin = "10px";
score.style.backgroundColor = "#a1a5c9";


//style guard div 
guard.style.backgroundColor = "#728ff7";
guard.style.height = "50px";
guard.style.width = "100px";
guard.style.float = "left";
guard.style.margin = "10px";

//style paper 
paper.style.backgroundColor = "#f7eccd";
paper.style.height = "50px";
paper.style.width = "100px";
paper.style.float = "left";
paper.style.margin = "10px";

//style scissors 
scissors.style.backgroundColor = "#f56858";
scissors.style.height = "50px";
scissors.style.width = "100px";
scissors.style.float = "left";
scissors.style.margin = "10px";



//variable to start score at 0
let scoreNum = 0;
let playerChoice = " ";
let compChoice = " ";

let displayChoice = document.createElement("div");


//style
displayChoice.style.backgroundColor = "#c9c9a1";
displayChoice.style.height = "50px";
displayChoice.style.width = "150px";
displayChoice.style.float = "left";
displayChoice.style.margin = "10px";
//place the objects on the page
document.body.appendChild(displayChoice);

function guardSelected() {
    if(guard) {
        playerChoice = "guard";
        scoreNum = scoreNum - .5;
    }
    displayChoice.innerHTML = "you: " + playerChoice +  "Computer: " + compChoice;
}


function rps(id) {
    //to generate a random move for the computer
    let options = Math.floor(Math.random() * 3) + 1;

    //computers choice
    if(options == 1) {
        compChoice = "rock";
    }

    if(options == 2){
        compChoice = "paper";
    }

    if(options == 3) {
        compChoice = "scissors";
    }

    //players choice
    if(id == rock){
        playerChoice = "rock";
    }

    if(id == paper){
        playerChoice = "paper";
    }

    if(id == scissors) {
        playerChoice = "scissors";
    }

    //results 
    displayChoice.innerHTML = "You: " + playerChoice + "<br />" + "Computer: " + compChoice;

}
