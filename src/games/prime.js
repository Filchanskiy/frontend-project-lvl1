import readlineSync from 'readline-sync';
import { startGames, right } from '../index.js';

const userName = startGames();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let counterOfAnswers = 1;
let trueAnswer;

const Prime = (number) => {
  let i = 0;
  let b = 0;
  while (i !== number) {
    i += 1;
    if (number % i === 0) {
      b += 1;
    }
  }
  if (b < 3) {
    trueAnswer = 'yes';
  }
  if (b > 2) {
    trueAnswer = 'no';
  }
  return trueAnswer;
};

const israndomNumberPrime = () => {
  while (counterOfAnswers <= 3) {
    const randomNumber = 1 + Math.ceil(Math.random() * 50);
    Prime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer && counterOfAnswers <= 3) {
      console.log(right);
      counterOfAnswers += 1;
    } else if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \nLet's try again, ${userName}!`);
      counterOfAnswers += 4;
    }
    if (counterOfAnswers === 4) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default israndomNumberPrime;
