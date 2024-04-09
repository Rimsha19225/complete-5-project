#! /urs/bin/env node

import inquirer from "inquirer";

let pass = true;
while (pass){
let myProject = await inquirer.prompt([
  {
    name: "mixProject",
    type: "list",
    message: "do you want to show project list",
    choices: [
        "simple calculator",
        "number guessing game",
        "ATM",
        "todo list",
        "currency convertor"
    ]
  },
]);
console.log(`simple calculator, number guessing game, ATM, todo list all in one project`);
if (myProject.mixProject === "simple calculator") {
    const solution = await inquirer.prompt([
      { message: "enter first number", type: "number", name: "firstNumber" },
      { message: "enter second number", type: "number", name: "secondNumber" },
      {
        message: "select operator to perform operations",
        type: "list",
        name: "operator",
        choices: [
          "addition",
          "subtraction",
          "multiplication",
          "division",
          "exponention",
          "module",
        ],
      },
    ]);
    if (solution.operator === "addition") {
      console.log(solution.firstNumber + solution.secondNumber);
    } else if (solution.operator === "subtraction") {
      console.log(solution.firstNumber - solution.secondNumber);
    } else if (solution.operator === "multiplication") {
      console.log(solution.firstNumber * solution.secondNumber);
    } else if (solution.operator === "division") {
      console.log(solution.firstNumber / solution.secondNumber);
    } else if (solution.operator === "exponention") {
      console.log(solution.firstNumber ** solution.secondNumber);
    } else if (solution.operator === "module") {
      console.log(solution.firstNumber % solution.secondNumber);
    } else {
      console.log("enter valid operator");
    }
} else if(myProject.mixProject === "number guessing game"){
  const randomNumber = Math.floor(Math.random() * 6 + 1);
    const number = await inquirer.prompt([
      {
        name: "guessNumber",
        message: "number guess between 1 to 6",
        type: "number",
      },
    ]);

    if (number.guessNumber === randomNumber) {
      console.log("congruntulation you guess right number");
    } else {
      console.log("Opps!! try again you guess wrong number");
    }
} else if(myProject.mixProject === "ATM"){
  let currentBallance = 5000; //rupees
console.log(`available balance is: ${currentBallance}`);
let pin = 1234;
let pinPasward = await inquirer.prompt([
    {
        name: "pas",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinPasward.pas === pin) {
    console.log("successfuly enter correct pin");
    let action = await inquirer.prompt([
        {
            name: "act",
            message: "which action perform",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (action.act === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "salary",
                message: "enter your salary amount",
                type: "list",
                choices: [1000, 3000, 5000, 7000, 9000]
            }
        ]);
        if (currentBallance > amount.salary) {
            currentBallance -= amount.salary;
            console.log("sucessfully withdraw")
            console.log(`your remaing amount is: ${currentBallance}`);
        }
        else {
            console.log("insuficient amount plz try again");
        }
    }
    else if (action.act === "check balance") {
        console.log(`your current balance is: ${currentBallance}`);
    }
    }
    else {
    console.log("your pin is incorrect try again");
}
} else if(myProject.mixProject === "todo list"){
  let task1 = ["biryani", "cake", "cold drink"];
    let condition = true;

    while (condition) {
      let party = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "which thing need to celebrate birthday party?",
        },

        {
          name: "themeBaseParty",
          type: "confirm",
          message: "do you want anything more?",
          default: "true",
        },
      ]);

      task1.push(party.todo);
      console.log(task1);
      condition = party.themeBaseParty;
      // task1.pop()
    }
} else if(myProject.mixProject === "currency convertor"){
  let currency_property: any = {
    USD: 1,       //BASE CURRENCY
    EUR: 0.92,
    GBP: 0.79,
    JPY: 151.85,
    CHF: 0.90,
    INR: 83.25,
    PLN: 3.9467,
    PKR: 277.57
}
let currencyConvertor = await inquirer.prompt(
    [
        {
            name: "from",
            MESSAGE: "currency convert from",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "CHF", "INR", "PLN", "PKR"]
        },
        {
            name: "to",
            MESSAGE: "currency convert to",
            type: "list",
            choices: ["USD", "EUR", "GBP", "JPY", "CHF", "INR", "PLN", "PKR"]
        },
        {
            name: "amount",
            MESSAGE: "enter amount",
            type: "number",
        }
    ]
);
let fromCurrency = currency_property[currencyConvertor.from];
let toCurrency = currency_property[currencyConvertor.to];
let amount = currencyConvertor.amount;
let baseCurrency = amount/fromCurrency;
let convertAmount = baseCurrency * toCurrency;

console.log(fromCurrency);
console.log(toCurrency);
console.log(amount);
console.log(convertAmount);
}
}