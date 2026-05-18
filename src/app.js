/* eslint-disable no-console */
'use strict';

import readline from 'node:readline';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';

const numberToGuess = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question('What is your guess? ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Enter valid number');
      ask();
    } else if (getBullsAndCows(userInput, numberToGuess).bulls === 4) {
      console.log('You win!');
      rl.close();
    } else {
      console.log(getBullsAndCows(userInput, numberToGuess));
      ask();
    }
  });
}

ask();
