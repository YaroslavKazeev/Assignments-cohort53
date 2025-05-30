const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(mondayTasks, hourlyRate) {
  return `€${mondayTasks
    .reduce((acc, item) => acc + (item['duration'] / 60) * hourlyRate, 0)
    .toFixed(2)}`;
}
console.log(computeEarnings(mondayTasks, hourlyRate));
// ! Unit tests (using Jest)
describe('js-wk3-mondaysWorth', () => {
  test('computeEarnings should take two parameters', () => {
    expect(computeEarnings.length).toBe(2);
  });

  test('computeEarnings should compute the earnings as a formatted Euro amount', () => {
    const result = computeEarnings(mondayTasks, hourlyRate);
    const expected = '€187.50';
    expect(result).toBe(expected);
  });
});
