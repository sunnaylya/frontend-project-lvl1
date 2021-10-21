import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNum();
    console.log(`Question: ${number}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (gamerAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was 'yes.'`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (gamerAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
