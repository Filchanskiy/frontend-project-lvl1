import { startGames, randomNumber } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const number = randomNumber(1, 100);
  const question = number;
  const answer = prime(question) ? 'yes' : 'no';
  return [question, answer];
};

const israndomNumberPrime = () => startGames(rule, game);
export default israndomNumberPrime;
