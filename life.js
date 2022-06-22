// simpe calculator

let num1 = parseFloat(prompt("Enter first number"));
let operator = prompt("choose operator ( +, -, /, * )  ");
let num2 = parseFloat(prompt("Enter second number"));

let result = 0;

if (isNaN(num1) || isNaN(num2)) {
  alert("Sorry dude! try again");
} else {
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  }
  alert(num1 + operator + num2 + "=" + result);
}
