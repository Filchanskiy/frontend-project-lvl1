import readlineSync from 'readline-sync';

export const startGames = () => {
  console.log('\nWelcome to the Brain Games!');
  const askName = () => readlineSync.question('May I have your name? ');
  const userName = askName();
  return userName;
};

export const right = 'Correct!';
