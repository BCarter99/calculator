const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.display')
    display.value = calculator.displayValue;
}

const keys = document.querySelector('.calc-keys');
keys.addEventListener('click', (event) => {
    
    // Access the clicked element
    const {target} = event;

    // Check if the clicked element is a button, exits if not
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    if (target.classList.contains('sign')) {
        console.log('sign', target.value);
        return;
    }

    if (target.classList.contains('percent')) {
        console.log('percent', target.value);
        return;
    }

    if (target.classList.contains('equals')) {
        console.log('equals', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}
