#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1231;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
console.log(pinAnswer["pin"]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operatioAns = await inquirer.prompt([
        {
            name: "operator",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "Fast Cash"],
        },
    ]);
    console.log(operatioAns.operator);
    if (operatioAns.operator === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (amountAns.amount <= myBalance) {
            console.log(`your remaining balance is: ${myBalance}`);
        }
        else if (amountAns.amount >= myBalance) {
            console.log("Insufficient balance!");
        }
    }
    else if (operatioAns.operator === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operatioAns.operator === "Fast Cash") {
        let amount = await inquirer.prompt([
            {
                name: "options",
                message: "Fast Cash",
                type: "list",
                choices: [1000, 2000, 5000],
            },
        ]);
        console.log(amount.options);
        myBalance -= amount.options;
        console.log(`you withdraw ${amount.options} by fast cash and your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Number");
}
