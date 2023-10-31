//Writing Function for Creating Div Element
function div(tagname, atname, atvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(atname, atvalue);
    ele.innerHTML = content;
    return ele;
}
// Writing Functions For Creating Button Elements
function buttn(tagname, atname, atvalue, atnam1, atvalue1, content) {
    var b = document.createElement(tagname);
    b.setAttribute(atname, atvalue);
    b.setAttribute(atnam1, atvalue1);
    b.innerHTML = content;
    return b;
}
// Creating Calculator Display
var cal = div("div", "class", "calculator", " ");
var caldisplay = div("div", "id", "cal-display", "");
var h1 = div("h1", "id", "displayNo", "");

//Creating buttons
var allbuttons = div("div", "class", "all-btns", "");
var b7 = buttn("button", "class", "nos", "id", "7", "7");
var b8 = buttn("button", "class", "nos", "id", "8", "8");
var b9 = buttn("button", "class", "nos", "id", "9", "9");
var division = buttn("button", "class", "nos", "id", "/", "/");
var b4 = buttn("button", "class", "nos", "id", "4", "4");
var b5 = buttn("button", "class", "nos", "id", "5", "5");
var b6 = buttn("button", "class", "nos", "id", "6", "6");
var multiplication = buttn("button", "class", "nos", "id", "*", "*");
var b1 = buttn("button", "class", "nos", "id", "1", "1");
var b2 = buttn("button", "class", "nos", "id", "2", "2");
var b3 = buttn("button", "class", "nos", "id", "3", "3");
var subtraction = buttn("button", "class", "nos", "id", "-", "-");
var bclear = buttn("button", "class", "btn-clear", "id", "clear", "C");
var b0 = buttn("button", "class", "nos", "id", "0", "0");
var equalto = buttn("button", "class", "btn-equal", "id", "equal-sign", "=");
var addition = buttn("button", "class", "nos", "id", "+", "+");


allbuttons.append(b7, b8, b9, division, b4, b5, b6, multiplication, b1, b2, b3, subtraction, bclear, b0, equalto, addition);
caldisplay.append(h1);
cal.append(caldisplay, allbuttons);
document.body.append(cal);

//let result = document.getElementById('displayNo');
let but = Array.from(document.getElementsByTagName('button'));


but.map(button => {

    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "C":
                h1.innerText = "";
                // h1.innerText = "0";
                break;
            case "=":
                try {
                    h1.innerText = eval(h1.innerText);
                } catch {
                    alert("Only numbers");
                }
                break;
            default:
                h1.innerText += e.target.innerText;
        }
    });
});