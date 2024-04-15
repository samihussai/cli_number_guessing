#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random no
const random_no = Math.floor(Math.random() * 6 + 1);
// 2) User input for guessing no
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Plz guess a number between 1-6",
  },
]);
// 3) Compare user input with COmputer generated no and show result
if (answer.userGuessNumber === random_no) {
  console.log("congratulations you guess right number");
} else {
  console.log(
    "You guess wrong number" + " " + "right number is" + " " + random_no
  );
}
