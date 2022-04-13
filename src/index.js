import readlineSync from 'readline-sync';

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const startGames = (task, game) => {
  console.log('\nWelcome to the Brain Games!');
  const askName = () => readlineSync.question('May I have your name? ');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
