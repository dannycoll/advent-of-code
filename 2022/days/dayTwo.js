import { getInputData } from "../utils.js";

//part one
//rock > scissors > paper > rock
// A = Rock = X, B = Paper = Y, C = Scissors = Z
// loss = 0, draw = 3, win = 6
// rock = 1, paper = 2, scissors = 3

// score = outcome + choice
const myOptions = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const oppOptions = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const getScore = (line, round) => {
  const [oppChoice, myChoice] = line.split(" ");
  return round === 1
    ? getRoundOneScore(oppChoice, myChoice)
    : getRoundTwoScore(oppChoice, myChoice);
};

const getRoundOneScore = (oppChoice, myChoice) => {
  const opp = oppOptions[oppChoice];
  const my = myOptions[myChoice];
  if (opp === my) {
    return 3 + Object.keys(myOptions).indexOf(myChoice) + 1;
  } else if (opp === "rock" && my === "scissors") {
    return 0 + Object.keys(myOptions).indexOf(myChoice) + 1;
  } else if (opp === "scissors" && my === "paper") {
    return 0 + Object.keys(myOptions).indexOf(myChoice) + 1;
  } else if (opp === "paper" && my === "rock") {
    return 0 + Object.keys(myOptions).indexOf(myChoice) + 1;
  } else {
    return 6 + Object.keys(myOptions).indexOf(myChoice) + 1;
  }
};
//0 return 2
//1 return 0
//2 return 1

const getRoundTwoScore = (oppChoice, myChoice) => {
  if (myChoice === "X") {
    //i want to lose based on what opp picked
    console.log(
      oppChoice,
      (Object.keys(oppOptions).indexOf(oppChoice) + 2) % 3
    );
    return 0 + ((Object.keys(oppOptions).indexOf(oppChoice) + 2) % 3) + 1;
  } else if (myChoice === "Y")
    // i want to draw based on what opp picked
    return 3 + ((Object.keys(oppOptions).indexOf(oppChoice) + 0) % 3) + 1;
  else if (myChoice === "Z")
    // i want to win based on what opp picked
    return 6 + ((Object.keys(oppOptions).indexOf(oppChoice) + 1) % 3) + 1;
  return 0;
};

const dayTwo = async () => {
  const text = await getInputData(2);
  let lines = text.split("\n");
  lines = lines.filter((line) => line !== "");
  let ptOneScore = 0;
  let ptTwoScore = 0;
  lines.forEach((line) => {
    ptOneScore += getScore(line, 1);
    ptTwoScore += getScore(line, 2);
    console.log(ptTwoScore);
  });
  console.log(ptOneScore);
  console.log(ptTwoScore);
};

export default dayTwo;

//opp picks scissors, index of = 2, so to get index = 1 (paper) we add 2 and mod 3
//opp picks paper, index of = 1, so to get index = 0 (rock) we add 2 and mod 3
//opp picks rock, index of = 0, so to get index = 2 (scissors) we add 2 and mod 3
