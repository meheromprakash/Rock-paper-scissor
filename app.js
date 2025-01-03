let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompChoice= ()=> {
    const options = ["rock","paper","scissors"];
    const randIndex =Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame =() =>{
    console.log("Draw!!!");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor ="#081b31";

};

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("Win!!!");
        msg.innerText = "You Win";
        msg.style.backgroundColor ="green";

    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("Lose!!");
        msg.innerText = "You Lose";
        msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) =>{
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
          userWin = compChoice === "scissors" ? false : true;
        }else{
           userWin = compChoice === "rock" ? false :true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});