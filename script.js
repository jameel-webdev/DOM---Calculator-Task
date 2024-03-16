// Writing Functions For Creating Elements
function buttn(tagname, atname, atvalue, content) {
  const b = document.createElement(tagname);
  b.setAttribute(atname, atvalue);
  b.innerHTML = content;
  return b;
}
// Calculator
const container = buttn("div", "class", "container", "");
const calculator = buttn("div", "class", "calculator", "");
const displayInput = document.createElement("input");
displayInput.setAttribute("type", "text");
displayInput.setAttribute("placeholder", "0");
displayInput.setAttribute("id", "eval");

// //Creating buttons
const bCl = buttn("button", "onclick", "Clear()", "Cl");
const bDel = buttn("button", "onclick", "del()", "Del");
const bRemainder = buttn("button", "onclick", "display('%')", "%");
const bDivision = buttn("button", "onclick", "display('/')", "/");
const b7 = buttn("button", "onclick", "display('7')", "7");
const b8 = buttn("button", "onclick", "display('8')", "8");
const b9 = buttn("button", "onclick", "display('9')", "9");
const bMultiplication = buttn("button", "onclick", "display('*')", "*");
const b4 = buttn("button", "onclick", "display('4')", "4");
const b5 = buttn("button", "onclick", "display('5')", "5");
const b6 = buttn("button", "onclick", "display('6')", "6");
const bSubration = buttn("button", "onclick", "display('-')", "-");
const b1 = buttn("button", "onclick", "display('1')", "1");
const b2 = buttn("button", "onclick", "display('2')", "2");
const b3 = buttn("button", "onclick", "display('3')", "3");
const bAddition = buttn("button", "onclick", "display('+')", "+");
const bDecimal = buttn("button", "onclick", "display('.')", ".");
const b0 = buttn("button", "onclick", "display('0')", "0");
const bEqual = buttn("button", "onclick", "Calculate()", "=");

calculator.append(
  displayInput,
  bCl,
  bDel,
  bRemainder,
  bDivision,
  b7,
  b8,
  b9,
  bMultiplication,
  b4,
  b5,
  b6,
  bSubration,
  b1,
  b2,
  b3,
  bAddition,
  bDecimal,
  b0,
  bEqual
);
container.append(calculator);
document.body.append(container);

//Evaluate
let result = document.getElementById("eval");

function display(num) {
  result.value += num;
}

function Calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Invalid Number");
  }
}

function Clear() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
