#!/usr/bin/env node

import readFile from "./index.js";
import chalk from "chalk";
import validateURLS from "./http-validation.js";

const path = process.argv;

async function processText(path) {
    const result = await readFile(path[2]);

    if (path[3] === "validate") {
        console.log(chalk.yellow('Validated links:'), await validateURLS(result));
    } else {
        console.log(chalk.yellow('Links: '), result);
    }
}

processText(path);