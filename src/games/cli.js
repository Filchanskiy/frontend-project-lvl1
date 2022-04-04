import startGames from '../index.js';

const askNameGreeting = () => {
  const userName = startGames();
  console.log(`Hello, ${userName}!`);
};

export default askNameGreeting;
