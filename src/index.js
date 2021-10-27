import readlineSync from 'readline-sync';

const generalFunc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
};
  
export default generalFunc;
