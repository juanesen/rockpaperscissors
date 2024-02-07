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
prompt("Rock, Paper or Scissors beach boi ?");

// User's option is stored in userSelection
// once each party has chosen the right one then we see who won 