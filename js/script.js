// What are we going to do : is a very simple rock, paper, scissors game

let bold = "font-weight: bold";

// machine has one variable where we store their answer
let machineSelection;

// user has one variable where we store their answer
let userSelection;

// A function for machine to select randomly one of the three options available
function randomMachineSelection() {
    let options = ["rock", "paper", "scissors"];
    return(options[(Math.floor(Math.random() * options.length))]);
  };

// A function to ask user what their selection is, not letting it pick other than rock papers scissors
function userChoice() {
     userSelection = prompt("Rock, Paper or Scissors beach boi ?");
     if (userSelection == null){
          userChoice()
     } else {
          userSelection = userSelection.toLowerCase();
     }
     rockPaperScissors();  
     return(userSelection);
};


// only let user enter Rock, Paper or Scissors and announce the choice
function rockPaperScissors() {
     if (userSelection == null) {
          alert("you didn't choose anything beach boi");
          userSelection = prompt("Rock, Paper or Scissors beach boi ?");
          rockPaperScissors();
     } else if (userSelection == "paper") {
          return(userSelection = "paper");
     } else if (userSelection == "scissors") {
          return(userSelection = "scissors");
     } else if (userSelection == "rock") {
          return(userSelection = "rock");
     }
          else {
          alert("you didn't choose anything beach boi");
          userSelection = prompt("Rock, Paper or Scissors beach boi ?");
          userSelection = userSelection.toLowerCase();
          rockPaperScissors();
     }
};


// once each party has chosen the right one then we see who won 
function playgame(userSelection, machineSelection) {

     // User's option is stored in userSelection as no caps 
     userSelection = userChoice();
     console.log("you have chosen " + userSelection);

     // we store the random option inside the machineSelection
     machineSelection = randomMachineSelection();
     console.log("evil machine has chosen " + machineSelection);

     if (userSelection == machineSelection) {
          console.log("%cThere is no winner in life only losers", bold);
     } else if (userSelection == "paper" & machineSelection == "rock") {
          console.log("%csilly user is the winner", bold);
     } else if (userSelection == "rock" & machineSelection == "scissors") {
          console.log("%csilly user is the winner", bold);
     } else if (userSelection == "scissors" & machineSelection == "paper") {
          console.log("%csilly user is the winner", bold);
     } else {
          console.log("%cevil machine is the winner", bold);
     }
};

playgame();
playgame();
playgame();
playgame();
playgame();


