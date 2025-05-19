export function giveCompliment(name) {
  const complimentArr = [
    'Charming',
    'Magnanimous',
    'Gorgeous',
    'Intrepid',
    'Savvy',
    'Delightful',
    'Exquisite',
    'Remarkable',
    'Compassionate',
    'Urbane',
  ];
  return `You are ${complimentArr[Math.floor(10 * Math.random())]}, ${name}!`;
}

function main() {
  const myName = 'Yaroslav';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
