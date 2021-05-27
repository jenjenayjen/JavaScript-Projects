//creates an object to keep track of value
const calculator = {
    //display 0 on the screen
    displayValue: '0',
    //hold the first operand for any experssions, set to null for now
    firstOp: null,
    //this checks whether or not the second operand has been input
    waitSecOp: false,
    //this hold the operator, set to null for now
    operator: null,
};

//this modifies values each time a button is clicked
function inputDigit(digit) {
    const { displayValue, waitSecOp } = calculator;
    //we are checking to see if waitSecOp is true and set
    //displayValue to the key that was clicked
    if (waitSecOp === true) {
        calculator.displayValue = digit;
        calculator.waitSecOp = false;
    } else {
        //this overwrites displayValue if the current value is 0
        //otherwise it adds to it
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}
//this section handles decimal points
function inputDecimal(dot) {
    //this ensures that accidental clicking of the decimal point
    //doesnt cause bugs in your operation
    if (calculator.waitSecOp === true) return;
    if (!calculator.displayValue.includes(dot)) {
        //we are saying that if the displayValue does not contain a decimal point
        //we want to add a decimal point
        calculator.displayValue += dot;
    }
}

//this section handles operators
function handleOp(nextOp) {
    const { firstOp, displayValue, operator } = calculator;
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in
    //calculator.firstOp if it doesn't already exist
    const valueOfInput = parseFloat(displayValue);
    //checks if an operator already exist and if waitSecOp is true,
    //then updates the operator and exist from the function
    if (operator && calculator.waitSecOp) {
        calculator.operator = nextOp;
        return;
    }
    if (firstOp == null) {
        calculator.firstOp = valueOfInput;
    } else if (operator) {
        //checks if an operator already exists
        const valueNow = firstOp || 0;
        //if operator exists, property lookup is performed for the operator
        //in the performCalculation object and the function taht matches the 
        //operator is executed
        let result = performCalculation[operator](valueNow, valueOfInput);
        //here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        //this will remove any trailings 0's
        result = (result * 1).toString();
        calculator.displayValue = parseFloat(result);
        calculator.firstOp = parseFloat(result);
    }
    calculator.waitSecOp = true;
    calculator.firstOp = nextOp;
}

const performCalculation = {
    '/': (firstOp, secOp) => firstOp / secOp,
    '*': (firstOp, secOp) => firstOp * secOp,
    '+': (firstOp, secOp) => firstOp + secOp,
    '-': (firstOp, secOp) => firstOp - secOp,
    '=': (firstOp, secOp) => secOp
};

function calculatorReset() {
    calculator.displayValue = '0';
    calculator.firstOp = null;
    calculator.waitSecOp = false;
    calculator.operator = null;
}

//this function updates the screen with the contents of displayValue
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element
    //that was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOp(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    //ensures that AC clears the numbers from the calculator
    if (target.classList.contains('all-clear')) {
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})