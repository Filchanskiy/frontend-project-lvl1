import readlineSync from 'readline-sync';

const startGames = () => {
  console.log('\nWelcome to the Brain Games!');
  const askName = () => readlineSync.question('May I have your name? ');
  const userName = askName();
  return userName;
};
export default startGames;
