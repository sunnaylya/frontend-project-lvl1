import generalFunc from 'index.js';

generalFunc();

for (let i = 1; i <= 3; i += 1) {
  const generateOperation = () => {
    const operators = ["+", "-", "*"];
    for (i of operators) {
      let idx = operators[i];
    }
      return num + idx + num;
    };
    const random = console.log('num + idx + num');
    const result = generateOperation();
    console.log(`Question: ${random}`);
  const gamerAnswer = readlineSync.question('Your answer: ');
  if (result === gamerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was ${result}.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  }
  console.log(`Congratulations, ${name}!`);
};
};
