import readlineSync from 'readline-sync';

console.log('\nWelcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

export default userName;
