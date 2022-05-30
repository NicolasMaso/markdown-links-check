import chalk from "chalk";
import fs from "fs";

function handleError(error) {
  throw new Error(
    chalk.red(error.code, "The specified file could not be accessed.")
  );
}

async function readFile(filepath) {
  const encoding = "utf-8";

  try {
    const text = await fs.promises.readFile(filepath, encoding);
    return extractLinks(text);
  } catch (error) {
    handleError(error);
  }
}

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultArray = [];
  let temp;

  while((temp = regex.exec(text)) != null) {
      resultArray.push({ [temp[1]] : temp[2] })
  }
  return resultArray.length === 0 ? 'No links found' : resultArray;
}

export default readFile;