import {
  startGames, right, firstQuestion, askAnswer,
} from '../index.js';

const userName = startGames();
firstQuestion();
const randomCalculator = () => {
  let counterOfAnswer = 1;
  let result = 1;

  while (counterOfAnswer <= 3) {
    const firstNum = Math.floor(Math.random() * 20);
    const secondNum = Math.floor(Math.random() * 20);
    const array = [firstNum + secondNum,
      firstNum - secondNum,
      firstNum * secondNum];
    const index = Math.floor(Math.random() * array.length);

    if (index === 0) {
      console.log(`Question: ${firstNum} + ${secondNum}`);
      result = firstNum + secondNum;
    } else if (index === 1) {
      console.log(`Question: ${firstNum} - ${secondNum}`);
      result = firstNum - secondNum;
    } else if (index === 2) {
      console.log(`Question: ${firstNum} * ${secondNum}`);
      result = firstNum * secondNum;
    }

    const answer = askAnswer();

    if (Number(answer) === result && counterOfAnswer <= 3) {
      console.log(right);
      counterOfAnswer += 1;
    } else if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
      counterOfAnswer += 4;
    }
  }

  if (counterOfAnswer === 4) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default randomCalculator;
