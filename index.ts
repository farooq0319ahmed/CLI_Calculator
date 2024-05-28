#! /usr/bin/env node


import inquirer from "inquirer";

const Num = await inquirer.prompt([
  { message: "Enter 1st Number:", type: "number", name: "first" },
  { message: "Enter 2nd Number:", type: "number", name: "second" },
  {
    message: "Enter the operation",
    name: "Operation",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
  },
]);

if (Num.Operation==="Addition"){
    console.log(`The answer of sum is : ${Num.first+Num.second}`);
}
else if (Num.Operation==="Subtraction"){
    console.log(`The answer of subtraction is : ${Num.first-Num.second}`);
}
else if (Num.Operation==="Multiplication"){
    console.log(`The answer of product is : ${Num.first*Num.second}`);
}
else{
    console.log(`The answer of Divison is : ${Num.first/Num.second}`);
}

