import { startGames, randomNumber } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const divisor = (x, y) => {
  if (y > x) return divisor(y, x);
  if (!y) return x;
  return divisor(y, x % y);
};

const game = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(divisor(firstNumber, secondNumber));
  return [question, answer];
};

const greatestCommonDivisor = () => startGames(rule, game);
export default greatestCommonDivisor;
