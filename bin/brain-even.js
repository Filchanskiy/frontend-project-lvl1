#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const randomNumber = () => {
  let counterOfAnswer = 1;
  while (counterOfAnswer <= 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const wrongAnswer1 = `\n${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    const wrongAnswer2 = `\n${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;

    if (number % 2 === 0 && answer === 'yes' && counterOfAnswer <= 3) {
      console.log('Correct!');
      counterOfAnswer += 1;
    } else if (number % 2 !== 0 && answer === 'no' && counterOfAnswer <= 3) {
      console.log('Correct!');
      counterOfAnswer += 1;
    } else if (number % 2 === 0 && answer !== 'yes') {
      console.log(wrongAnswer2);
      counterOfAnswer += 4;
    } else if (number % 2 !== 0 && answer !== 'no') {
      console.log(wrongAnswer1);
      counterOfAnswer += 4;
    }
  }
  if (counterOfAnswer === 4) {
    console.log(`Congratulations, ${userName}!`);
  }
};

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log('');
randomNumber();
