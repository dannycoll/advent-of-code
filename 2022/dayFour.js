import { getInputData } from "./utils.js";

const dayFour = async () => {
  const text = await getInputData(4);
  const lines = text.split("\n");
  console.log(lines);
  //Parse the input to create an array of ranges
  var ranges = lines.map((line) => line.split(","));
  ranges = ranges.map((range) =>
    range.map((entry) => entry.split("-").map((num) => parseInt(num)))
  );
  console.log(ranges);

  //check if one range is within another
  const isWithin = (range1, range2) =>
    range1[0] >= range2[0] && range1[1] <= range2[1];

  //check if one range overlaps another
  const isOverlapping = (range1, range2) =>
    range1[0] <= range2[1] && range1[1] >= range2[0];
  let ptOneCounter = 0;
  let ptTwoCounter = 0;
  ranges.forEach((range) => {
    if (range[0].length !== 2 || range[1].length !== 2) return;
    if (isWithin(range[0], range[1]) || isWithin(range[1], range[0]))
      ptOneCounter++;
    if (isOverlapping(range[0], range[1])) ptTwoCounter++;
  });
  console.log(ptOneCounter);
  console.log(ptTwoCounter);
};

export default dayFour;
