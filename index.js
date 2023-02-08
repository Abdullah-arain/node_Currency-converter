#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow('Welcome To My Currency Converter');
    await sleep();
    rainbow.stop();
}
await welcome();
let Convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(chalk.green(`Your convertion from ${from} to ${to} is ${result}`));
}
else {
    console.log(chalk.redBright("Invalid input"));
}
