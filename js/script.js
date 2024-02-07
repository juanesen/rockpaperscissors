// What are we going to do : is a very simple rock, paper, scissors game


// machine has one variable where we store their answer
let machineSelection;

// user has one variable where we store their answer
let userSelection;

// machine selects randomly one of the three options available
function randomMachineSelection() {
    let options = ["rock", "paper", "scissors"];
    return(options[(Math.floor(Math.random() * options.length))]);
  }

// we store the random option inside the machineSelection
machineSelection = randomMachineSelection();

// User is prompt for the option they want
// User's option is stored in userSelection as no caps 
userSelection = prompt("Rock, Paper or Scissors beach boi ?");
userSelectionLowerCase = userSelection.toLowerCase();
console.log(userSelectionLowerCase);

// only let user enter Rock, Paper or Scissors
if (userSelectionLowerCase == "rock") {
     console.log("you have chosen rock")
} else if (userSelectionLowerCase == "paper") {
     console.log("you have chosen paper")
} else if (userSelectionLowerCase == "scissors") {
     console.log("you have chosen scissors")
} else {
    console.log("you didn't choose anything beach boi");
}

console.log(userSelectionLowerCase);


// once each party has chosen the right one then we see who won 