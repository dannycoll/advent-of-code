import cookie from "./cookie.js";

const getInputData = async (day) => {
  const data = await fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    headers: {
      cookie: cookie,
    },
  });
  const text = await data.text();
  return text;
};

export { getInputData };
