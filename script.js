// buttons for digits
const btnDigits = Array.from(document.querySelectorAll(".digit"))
let currentNumber = ""


for (let i = 0; i < btnDigits.length; i++) {
    btnDigits[i].addEventListener("click", () => {
        // When you click on a digit, that digit is added to the currentNumber
        currentNumber += btnDigits[i].textContent;
        // the display is updated with the new number
        updateDisplay();
    })
};

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

    })
};

const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
const btnMultiply = document.querySelector(".multiply");
const btnDivide = document.querySelector(".divide");
const btnEqual = document.querySelector(".equal");

// other buttons
const btnPlusMinus = document.querySelector(".plus-minus");
const btnBackspace = document.querySelector(".backspace");
const btnClear = document.querySelector(".clear");

// displays
const displaySection = document.querySelector(".display");
const displayHistory = document.querySelector(".history");
const displayCurrent = document.querySelector(".current-answer");

// Update display with new currenNumber
function updateDisplay() {
    displayCurrent.textContent = currentNumber;
}


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
            result = afirstNumber / SecondNumber;
            break;
    }

    // keep only a few decimals
    return result = parseFloat((result).toFixed(5))
}