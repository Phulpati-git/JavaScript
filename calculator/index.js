const display = document.getElementById("display");

let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculate() {

    let operator = "";

    if (currentInput.includes("+")) {
        operator = "+";
    }
    else if (currentInput.includes("-")) {
        operator = "-";
    }
    else if (currentInput.includes("*")) {
        operator = "*";
    }
    else if (currentInput.includes("/")) {
        operator = "/";
    }

    let parts = currentInput.split(operator);

    let num1 = Number(parts[0]);
    let num2 = Number(parts[1]);

    let result = 0;

    switch(operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;
    }
    display.value = result;
}