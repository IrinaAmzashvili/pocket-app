const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'c', 'ENTER'];
const ops = ['add', 'sub', 'mult', 'div'];

const defaultState = {
  currentInput: '',
  total: 0,
  currentOp: null,
}

const generateMath = () => {
  // declare state
  let state = {...defaultState};

  // draw calculator
  const math = document.createElement('div');
  math.id = 'math';
  math.style.border = `5px solid ${appList[0].color}`;

  // draw lcd display
  const lcd = document.createElement('span');
  lcd.id = 'lcd';
  lcd.classList = 'math-module';
  lcd.innerHTML = state.total;

  math.append(lcd);

  // draw keypad display
  const numbers = document.createElement('div');
  numbers.id = 'numbers';

  // handle num inputs
  const handleNumInput = numInput => {
    if (numInput === '.') return;
    if (numInput === 'c') {
      state = {...defaultState};
      return lcd.innerHTML = 0;
    }

    state.currentInput += numInput;
    lcd.innerHTML = state.currentInput;
  };

  // handle calculations
  const calculate = () => {
    let currnetValue = parseFloat(state.currentInput);
    switch (state.currentOp) {
      case 'add':
        state.total += currnetValue;
        break;
      case 'sub':
        state.total -= currnetValue;
        break;
      case 'mul':
        state.total *= currnetValue;
        break;
      case 'div':
        state.total /= currnetValue;
        break;
      default:
        state.total = 0;
        break;
    }

    state.currentInput = '';
    lcd.innerHTML = state.total;
  }

  // if operation is selected, calculate()
  // else set total to current input
  const handleOpInput = opInput => {
    console.log('hi')
    if (state.currentOp) {
      calculate();
    } else {
      state.total = parseFloat(state.currentInput);
      state.currentInput = '';
    }
    state.currentOp = opInput;
    console.log(state)
    // edge case when subtracting
  }

  // draw numbers button
  nums.forEach(num => {
    const button = document.createElement('button');
    button.innerHTML = num;
    if (num === 'c') button.style.color = appList[0].color;
    if (num === 'ENTER') button.classList = 'enter-button'
    button.onclick = () => handleNumInput(num);
    numbers.append(button);
  });

  // draw ops buttons
  const opButtonsDiv = document.createElement('div');
  ops.forEach(op => {
    const button = document.createElement('button');
    button.innerHTML = op;
    // button.onClick = () => console.log(op);
    button.onClick = () => handleOpInput(op);
    opButtonsDiv.append(button);
  });

  // display
    // get display div
    // create calculator div, append to display
      // create div for number display, append to calculator
      // create numbers div, append to calculator
        // create numbers, including . and c, append all to numbers div
        // create by iterating through an array of all options

        // add on click event listener
          // if num or ., append new num to input num
          // if 'c', set input num to 0

      // create enter, append to calculator
        // add click (and keyCode) event listener
          // if operation selected, apply operation to
            //
          // else reset input to 0

  // options
    // get options div
    // create operations div, append to options
      // create add, sub, mul, div, append to operations div
      // add event listener
        // when selected, add 'selected' to classList for css
        // set operation value to corresponding operation
        // set former input as input




  math.append(numbers);
  options.append(opButtonsDiv);
  display.append(math);
}
