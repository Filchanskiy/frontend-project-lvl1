import { startGames, randomNumber } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  const number = randomNumber(1, 100);
  const question = number;
  const answer = String(even(question));
  return [question, answer];
};

const evenNumber = () => startGames(task, game);

export default evenNumber;
