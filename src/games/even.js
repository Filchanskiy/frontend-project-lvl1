import readlineSync from 'readline-sync';
import startGames from '../index.js';

const userName = startGames();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = () => {
  let counterOfAnswer = 1;
  while (counterOfAnswer <= 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const wrongAnswer1 = `\n${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    const wrongAnswer2 = `\n${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;

    if (number % 2 === 0 && answer === 'yes' && counterOfAnswer <= 3) {
      console.log('Correct!');
      counterOfAnswer += 1;
    } else if (number % 2 !== 0 && answer === 'no' && counterOfAnswer <= 3) {
      console.log('Correct!');
      counterOfAnswer += 1;
    } else if (number % 2 === 0 && answer !== 'yes') {
      console.log(wrongAnswer2);
      counterOfAnswer += 4;
    } else if (number % 2 !== 0 && answer !== 'no') {
      console.log(wrongAnswer1);
      counterOfAnswer += 4;
    }
  }
  if (counterOfAnswer === 4) {
    console.log(`Congratulation ${userName}!`);
  }
};
export default randomNumber;
