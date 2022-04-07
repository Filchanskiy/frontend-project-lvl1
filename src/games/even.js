import readlineSync from 'readline-sync';
import startGames from '../index.js';

const userName = startGames();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = () => {
  let counterOfAnswers = 1;
  while (counterOfAnswers <= 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const wrongAnswer1 = `\n${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    const wrongAnswer2 = `\n${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;

    if (number % 2 === 0 && answer === 'yes' && counterOfAnswers <= 3) {
      console.log('Correct!');
      counterOfAnswers += 1;
    } else if (number % 2 !== 0 && answer === 'no' && counterOfAnswers <= 3) {
      console.log('Correct!');
      counterOfAnswers += 1;
    } else if (number % 2 === 0 && answer !== 'yes') {
      console.log(wrongAnswer2);
      counterOfAnswers += 4;
    } else if (number % 2 !== 0 && answer !== 'no') {
      console.log(wrongAnswer1);
      counterOfAnswers += 4;
    }
  }
  if (counterOfAnswers === 4) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default randomNumber;
