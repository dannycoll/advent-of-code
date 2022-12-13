import { getInputData } from "../utils.js";

const formatStacks = (stackStrings) => {
  let numOfStacks = stackStrings[stackStrings.length - 1].split(" ").length;
  let stacks = [];
  for (let i = 0; i < numOfStacks; i++) {
    stacks.push([]);
  }
  for (let i = stackStrings.length - 1; i >= 0; i--) {
    let stack = stackStrings[i].split(" ");
    const value = "";
    const newValue = " ";

    for (let i = 0; i < stack.length - 3; i++)
      if (stack.slice(i, i + 4).filter((item) => item == value).length === 4)
        stack.splice(i, 4, newValue);

    if (stack.length !== numOfStacks) break;

    stack.forEach((item, index) =>
      item != " " ? stacks[index].push(item) : null
    );
  }
  return stacks;
};

const moveCrates = (stacks, matches, model) => {
  const [x, y, z] = matches;
  if (model == 9000) {
    const temp = stacks[y - 1].slice(0, -x);
    stacks[z - 1] = stacks[z - 1].concat(stacks[y - 1].slice(-x).reverse());
    stacks[y - 1] = temp;
  } else {
    const temp = stacks[y - 1].slice(0, -x);
    stacks[z - 1] = stacks[z - 1].concat(stacks[y - 1].slice(-x));
    stacks[y - 1] = temp;
  }
};
const dayFive = async () => {
  const text = await getInputData(5);
  const lines = text.split("\n");
  let stackStrings = [];
  const regex = /\d+/g;
  for (const line of lines) {
    const matches = line.match(regex);
    if (!matches) {
      stackStrings.push(line);
    } else break;
  }
  let stacks = formatStacks(stackStrings);

  for (const line of lines) {
    const matches = line.match(regex);
    if (line.includes("move") && matches.length === 3)
      moveCrates(stacks, matches, 9000);
  }
  console.log(
    stacks
      .map((stack) => stack[stack.length - 1].replace("[", "").replace("]", ""))
      .join("")
  );

  //part two
  stacks = formatStacks(stackStrings);
  for (const line of lines) {
    const matches = line.match(regex);
    if (line.includes("move") && line.match(regex).length === 3)
      moveCrates(stacks, matches, 9001);
  }
  console.log(
    stacks
      .map((stack) => stack[stack.length - 1].replace("[", "").replace("]", ""))
      .join("")
  );
};

export default dayFive;
