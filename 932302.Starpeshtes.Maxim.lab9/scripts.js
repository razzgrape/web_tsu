const signs = ['+', '-', '*', '/'];
const clearSign = 'C';
const removeOneSymbolSign = '<-';
const equalSign = '=';
const dotSign = '.';

const buttonsContainer = document.querySelector('.calculator-buttons');
const displayInput = document.querySelector('.calculator-display input');

buttonsContainer.addEventListener('click', ($event) => {
    const el = $event.target;
    const inputVal = displayInput.value;

    if (el.classList.contains('calculator-button')) {
        const newSymbol = el.textContent;

        hasUnallowedSymbols(inputVal) ? displayInput.value = '' : calc(inputVal, newSymbol);
    }
});

const hasUnallowedSymbols = (inputVal) => {
   return !((inputVal).match(/[0-9%\/*\-+=]/) || inputVal === '');
};

const calc = (inputVal, newSymbol) => {
    if (newSymbol === equalSign) {
        clickEqual(inputVal);
    }
    else if (newSymbol === removeOneSymbolSign) {
        displayInput.value = inputVal.substring(0, inputVal.length - 1);
    }
    else if (newSymbol === clearSign) {
        displayInput.value = '';
    }
    else if (newSymbol === dotSign) {
        clickDot(inputVal);
    }
    else {
        signs.includes(newSymbol) ? clickSign(inputVal, newSymbol) : displayInput.value += newSymbol;
    }
}

const clickEqual = (inputVal) => {
    if (isLastSymbolSign(inputVal) || isLastSymbolDot(inputVal)) {
        displayInput.value = inputVal.substring(0, inputVal.length - 1);
    }

    displayInput.value = eval(displayInput.value);
};

const clickSign = (inputVal, newSymbol) => {
    if (isFirstSymbolSign(inputVal) && newSymbol !== '-') {
        displayInput.value = displayInput.value;
    } else if (isLastSymbolSign(inputVal) || isLastSymbolDot(inputVal)) {
        displayInput.value = inputVal.substring(0, inputVal.length - 1) + newSymbol;
    }
    else {
        displayInput.value += newSymbol;
    }
};

const clickDot = (inputVal) => {
    if (isLastSymbolSign(inputVal) || isLastSymbolDot(inputVal)) {
        return;
    }

    let dotsCount = 0;

    for (let i = inputVal.length - 1; i >= 0; i--) {
        if (inputVal[i] === dotSign) {
            dotsCount++;
        }

        if (signs.includes(inputVal[i])) {
            break;
        }
    }

    if (dotsCount !== 0) {
        displayInput.value = displayInput.value;
    } else {
        displayInput.value += dotSign;
    }
};

const isFirstSymbolSign = (inputVal) => {
    return inputVal.length === 0;
};

const isLastSymbolSign = (inputVal) => {
    const lastSymbol = inputVal.slice(inputVal.length - 1, inputVal.length);
    return signs.includes(lastSymbol);
};

const isLastSymbolDot = (inputVal) => {
    const lastSymbol = inputVal.slice(inputVal.length - 1, inputVal.length);
    return '.' === lastSymbol;
};