import {
  startGames, right, fourthTask, askAnswer, congratulations,
} from '../index.js';

const userName = startGames();
fourthTask();

let trueAnswer;
let counterOfAnswers = 1;
const array = [];

const arithmeticProgression = (zero) => {
  array.length = zero;
  const startNum = Math.floor(Math.random() * 30);
  const stepOfProgression = Math.floor(Math.random() * 10);
  let stepCount = startNum;
  array.push(stepCount);
  for (let i = 0; i < 10; i += 1) {
    stepCount += stepOfProgression;
    array.push(stepCount);
  }
  const indexArray = Math.floor(Math.random() * 10);
  trueAnswer = array[indexArray];
  array[indexArray] = '..';
  return array.join(' ');
};

const missingNumberInAP = () => {
  while (counterOfAnswers <= 3) {
    arithmeticProgression(0);
    trueAnswer = String(trueAnswer);
    console.log(`Question: ${array.join(' ')}`);
    const answer = askAnswer();
    if (answer === trueAnswer && counterOfAnswers <= 3) {
      console.log(right);
      counterOfAnswers += 1;
    } else if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \nLet's try again, ${userName}!`);
      counterOfAnswers += 4;
    }
  }
  if (counterOfAnswers === 4) {
    congratulations(userName);
  }
};

export default missingNumberInAP;
