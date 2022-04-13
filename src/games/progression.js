import { startGames, randomNumber } from '../index.js';

const rule = 'What number is missing in the progression?';

const prog = (start, length, step) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    array.push(start + step * i);
  }
  return array;
};

const progressionWithMiss = (progression, item) => {
  const newProg = progression.slice(0);
  const newItem = item;
  newProg[newItem] = '..';
  return newProg.join(' ');
};

const game = () => {
  const number = randomNumber(1, 10);
  const randomStep = randomNumber(1, 10);
  const progLength = 10;
  const randomMiss = randomNumber(1, progLength);
  const progression = prog(number, progLength, randomStep);
  const question = progressionWithMiss(progression, randomMiss);
  const delElement = number + (randomStep * randomMiss);
  const answer = String(delElement);
  return [question, answer];
};

const missingNumberInAP = () => startGames(rule, game);

export default missingNumberInAP;
