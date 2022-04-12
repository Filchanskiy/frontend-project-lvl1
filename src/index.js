import readlineSync from 'readline-sync';

export const startGames = () => {
  console.log('\nWelcome to the Brain Games!');
  const askName = () => readlineSync.question('May I have your name? ');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const right = 'Correct!';

export const askAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const firstQuestion = () => console.log('What is the result of the expression?'); // Вопрос к первому заданию.
