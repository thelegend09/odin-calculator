// initialize numbers
let currentNumber = ""
let previousNumber = ""
let operator = ""
let operatorDisplay = ""
let history = ""
let answer = ""


// buttons for digits
const btnDigits = Array.from(document.querySelectorAll(".digit"))

for (let i = 0; i < btnDigits.length; i++) {
    btnDigits[i].addEventListener("click", () => {
        // When you click on a digit, that digit is added to the currentNumber
        currentNumber += btnDigits[i].textContent;
        // the display is updated with the new number
        updateDisplay();
    })
};

// button for period (.)
const btnPeriod = document.querySelector(".period");

btnPeriod.addEventListener("click", () => {
    // makes sure there's no more than one period in currentNumber
    if (!(currentNumber.includes("."))) {
        currentNumber += btnPeriod.textContent;
        updateDisplay();
    }
});

// buttons for operators
const btnOperators = Array.from(document.querySelectorAll(".operator"))

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener("click", () => {
        if (answer !== "") {
            previousNumber = answer
            displayHistory.textContent = answer
        }
        else {
            previousNumber = Number(currentNumber);

        }
        currentNumber = "";
        operator = btnOperators[i].id;
        operatorDisplay = btnOperators[i].textContent;
        updateDisplay()
    });
};

// const btnPlus = document.querySelector(".plus");
// const btnMinus = document.querySelector(".minus");
// const btnMultiply = document.querySelector(".multiply");
// const btnDivide = document.querySelector(".divide");

const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener("click", () => {
    // alert("Previous number is " + String(previousNumber) + ". Current number is " + String(currentNumber));
    answer = operate(operator, previousNumber, Number(currentNumber))
    displayCurrent.textContent = "=" + String(answer)
    displayHistory.textContent = previousNumber + operatorDisplay + currentNumber

});

// other buttons
const btnPlusMinus = document.querySelector(".plus-minus");

const btnBackspace = document.querySelector(".backspace");

// clear button
const btnClear = document.querySelector(".clear");

btnClear.addEventListener("click", () => {
    currentNumber = ""
    previousNumber = ""
    operator = ""
    operatorDisplay = ""
    history = ""
    answer = ""
    displayCurrent.textContent = ""
    displayHistory.textContent = ""
});

// displays
const displaySection = document.querySelector(".display");
const displayHistory = document.querySelector(".history");
const displayCurrent = document.querySelector(".current-answer");

// Update display with new currenNumber
function updateDisplay() {
    if (operatorDisplay !== "") {
        displayCurrent.textContent = previousNumber + operatorDisplay + currentNumber
    } else {
        displayCurrent.textContent = currentNumber;
    };
};


// main operation factory
function operate(operation, firstNumber, SecondNumber) {
    switch (operation) {
        case "addition":
            result = firstNumber + SecondNumber;
            break;

        case "substraction":
            result = firstNumber - SecondNumber;
            break;

        case "multiplication":
            result = firstNumber * SecondNumber;
            break;

        case "division":
            result = firstNumber / SecondNumber;
            break;
    }

    // keep only a few decimals
    return result = parseFloat((result).toFixed(5))
}