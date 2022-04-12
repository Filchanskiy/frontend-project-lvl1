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

export const firstTask = () => console.log('Answer "yes" if the number is even, otherwise answer "no".'); // Задание к первой игре.
export const secondTask = () => console.log('What is the result of the expression?'); // Задание ко второй игре.
export const thirdTask = () => console.log('Find the greatest common divisor of given numbers.'); // Задание к третьей игре.
export const fourthTask = () => console.log('What number is missing in the progression?'); // Задание к четвертой игре.
export const fifthTask = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // Задание к пятой игре.
