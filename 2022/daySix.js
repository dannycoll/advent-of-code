import { getInputData } from "./utils.js";

const findUniqueChars = (buffer, number) => {
  let uniqueChars = 0;
  let processedChars = 0;
  let lastBlock = [];
  while (uniqueChars < number && buffer.length > 0) {
    uniqueChars = 0;
    if (lastBlock.length >= number) {
      lastBlock.shift();
    }
    const char = buffer.shift();
    processedChars++;
    lastBlock.push(char);
    const set = new Set(lastBlock);
    uniqueChars = set.size;
  }
  return processedChars;
};
const daySix = async () => {
  const text = await getInputData(6);
  let buffer = text.split("");
  console.log(findUniqueChars(buffer, 4));
  //part 2
  buffer = text.split("");
  console.log(findUniqueChars(buffer, 14));
};

export default daySix;
