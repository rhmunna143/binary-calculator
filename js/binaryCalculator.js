// global variables
let num1 = "";
let num2 = "";
let operator = "";

// result container dom
const res = document.getElementById("res");

// operator checker
const checkOperator = () => {
  if (
    operator == "+" ||
    operator == "-" ||
    operator == "/" ||
    operator == "*"
  ) {
    return true;
  }
};

// display of calculator
const display = (value = "") => {
  if (value) {
    res.innerHTML = value;
  }
};

// zero or one number adds
const add = (num) => {
  const existOperator = checkOperator();

  if (!existOperator) {
    num1 = num1 + num;
    display(num1);
  }

  if (existOperator) {
    num2 = num2 + num;
    display(num1 + operator + num2);
  }
};

// the operator assignment
const assignOperator = (opr) => {
  const existOperator = checkOperator();

  if (num1 && !existOperator) {
    operator = opr;
    display(num1 + operator)
  } else {
    return alert("Enter the number first or the Operator is already exist!");
  }
};

// clear all. the C button
const clearResult = () => {
    num1 = "";
    num2 = "";
    operator = "";
    res.innerHTML = "";
}