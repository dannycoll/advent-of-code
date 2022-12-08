import { getInputData } from "./utils.js";

const dayOne = async () => {
  const text = await getInputData(1);
  const lines = text.split("\n");

  const elves = [];
  let elf = [];
  lines.forEach((line) => {
    if (line == "") {
      elves.push(elf);
      elf = [];
    } else elf.push(parseInt(line));
  });
  elves.forEach((elf) => (elf.sum = elf.reduce((a, b) => a + b, 0)));
  elves.sort((a, b) => b.sum - a.sum);
  // part 1
  console.log(elves[0].sum);
  // part 2
  console.log(
    elves
      .map((elf) => elf.sum)
      .splice(0, 3)
      .reduce((a, b) => a + b)
  );
};

export default dayOne;
