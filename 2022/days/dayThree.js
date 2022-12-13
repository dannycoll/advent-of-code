import { getInputData } from "../utils.js";

function cutString(str, index) {
  const result = [str.slice(0, index), str.slice(index)];

  return result;
}

const assignPriority = (letter) => {
  if (letter.toLowerCase() === letter) return letter.charCodeAt(0) - 96;

  return letter.charCodeAt(0) - 38;
};

const dayThree = async () => {
  const text = await getInputData(3);
  const lines = text.split("\n");
  let sumPtOne = 0;
  lines.forEach((line) => {
    //split line in half
    const [firstHalf, secondHalf] = cutString(line, line.length / 2);
    //find the common letter between the two halves
    const commonLetter = firstHalf
      .split("")
      .find((letter) => secondHalf.includes(letter));

    if (commonLetter) sumPtOne += assignPriority(commonLetter);
  });
  console.log(sumPtOne);

  let sumPtTwo = 0;
  let groups = [];
  for (var i = 0; i < lines.length; i += 3) {
    groups.push(lines.slice(i, i + 3));
  }
  groups.forEach((group) => {
    var common = group[0].split("").filter(function (element) {
      return (
        group[1].split("").includes(element) &&
        group[2].split("").includes(element)
      );
    });
    if (common.length > 0) sumPtTwo += assignPriority(common[0]);
  });
  console.log(sumPtTwo);
};
export default dayThree;
