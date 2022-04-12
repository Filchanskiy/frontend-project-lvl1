import {
  startGames, right, thirdTask, askAnswer, congratulations,
} from '../index.js';

const userName = startGames();
thirdTask();

const Divisor = (x, y) => {
  if (y > x) return Divisor(y, x);
  if (!y) return x;
  return Divisor(y, x % y);
};

const greatestCommonDivisor = () => {
  let counterOfAnswers = 1;
  while (counterOfAnswers <= 3) {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);

    const carrentAnswer = Divisor(firstNumber, secondNumber);

    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = askAnswer();
    if (Number(answer) === carrentAnswer && counterOfAnswers <= 3) {
      right();
      counterOfAnswers += 1;
    } else if (answer !== carrentAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${carrentAnswer}'. \nLet's try again, ${userName}!`);
      counterOfAnswers += 4;
    }
  }
  if (counterOfAnswers === 4) {
    congratulations(userName);
  }
};

export default greatestCommonDivisor;
