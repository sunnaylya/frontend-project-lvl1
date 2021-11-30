import readlineSync from 'readline-sync';
import _ from 'lodash';

let name = 0;

const generalFunc = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

const evenFunc = () => {
  const generateNum = () => Math.floor(Math.random() * 100) + 1;
  for (let i = 1; i <= 3; i += 1) {
    const number = generateNum();
    console.log(`Question: ${number}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (gamerAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was "yes".`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (gamerAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was "no".`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const calcFunc = () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const getRandNum1 = Math.floor(Math.random() * 100) + 1;
    const getRandNum2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*'];
    const getRandOperator = _.sample(operators);
    if (getRandOperator === '+') {
      const sum = getRandNum1 + getRandNum2;
      console.log(`Question: ${getRandNum1} + ${getRandNum2}`);
      const gamerAnswer = readlineSync.question('Your answer: ');
      // const gamerAnswer = readlineSync.question('Your answer: ');
      if (gamerAnswer == sum) {
        console.log('Correct!');
      } else {
        console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was ${sum}.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    } else if (getRandOperator === '-') {
      const subtract = getRandNum1 - getRandNum2;
      console.log(`Question: ${getRandNum1} - ${getRandNum2}`);
      const gamerAnswer = readlineSync.question('Your answer: ');
      if (gamerAnswer == subtract) {
        console.log('Correct!');
      } else {
        console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was ${subtract}.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    } else {
      const multipl = getRandNum1 * getRandNum2;
      console.log(`Question: ${getRandNum1} * ${getRandNum2}`);
      const gamerAnswer = readlineSync.question('Your answer: ');
      if (gamerAnswer == multipl) {
        console.log('Correct!');
      } else {
        console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was ${multipl}.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { generalFunc, calcFunc, evenFunc };
