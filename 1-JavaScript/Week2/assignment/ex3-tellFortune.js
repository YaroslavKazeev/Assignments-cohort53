function selectRandomly(arr) {
  return arr[Math.floor(Math.random() * 5)];
}

export function tellFortune(numKids, partnerNames, locations, jobTitles) {
  return `You will be a ${selectRandomly(jobTitles)} in ${selectRandomly(locations)}, married to ${selectRandomly(partnerNames)} with ${selectRandomly(numKids)} kids.`;
}

function main() {
  // Array of random numbers representing the number of kids (0-5)
  const numKids = [0, 1, 2, 4, 7];

  // Array of random partner names
  const partnerNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'];

  // Array of random locations
  const locations = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
  ];

  // Array of random job titles
  const jobTitles = ['Engineer', 'Doctor', 'Artist', 'Teacher', 'Nurse'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
