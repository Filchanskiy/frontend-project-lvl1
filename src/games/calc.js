import { startGames, randomNumber } from '../index.js';

const task = 'What is the result of the expression?';

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Wrong operator!');
  }
};

const game = () => {
  const firstNum = randomNumber(1, 20);
  const secondNum = randomNumber(1, 20);
  const operators = ['+', '-', '*', '%'];
  const arrOperators = operators[randomNumber(0, 4)];
  const question = `${firstNum} ${arrOperators} ${secondNum}`;
  const answer = String(calculator(firstNum, secondNum, arrOperators));
  return [question, answer];
};

const randomCalculator = () => startGames(task, game);

export default randomCalculator;
