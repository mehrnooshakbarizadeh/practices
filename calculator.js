"use strict";

const input = document.getElementById("input");
const number = document.querySelectorAll(".numbers div");
const operator = document.querySelectorAll(".operator div");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
let resultDisplay = false;

// console.log(input);
// input.textContent = 'hello';

function handleClick(e) {
  const currentString = input.innerHTML;
  const lastChar = currentString[currentString.length - 1];

  if (resultDisplay === false) {
    input.innerHTML +=
      e.currentTarget.getAttribute("data-value") || e.currentTarget.innerHTML;
  } else if (
    (resultDisplay === true && lastChar === "+") ||
    "-" ||
    "/" ||
    "*"
  ) {
    resultDisplay = false;
    input.innerHTML += e.currentTarget.getAttribute("data-value");
    // console.log(e.target)
  } else {
    resultDisplay = false;
    input.innerHTML = "";
    input.innerHTML += e.currentTarget.getAttribute("data-value");
  }
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", handleClick);
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    const currentOperator = input.innerHTML;
    const lastOperator = currentOperator[currentOperator.length - 1];
    if (
      lastOperator === "-" ||
      lastOperator === "+" ||
      lastOperator === "÷" ||
      lastOperator === "×"
    ) {
      var newString =
        currentOperator.substring(0, currentOperator.length - 1) +
        e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentOperator.length == 0) {
      console.log("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function () {
  var inputString = input.innerHTML;
  var numbers = inputString.split(/\+|\-|\×|\÷/g);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(numbers);
  console.log(operators);
  console.log("-------------------------------");

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];
  resultDisplay = true;
});

clear.addEventListener("click", function () {
  input.innerHTML = "";
});
