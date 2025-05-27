const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

const unwantedFruit = 'lemon';

// ! Function under test
function sanitizeFruitBasket(fruitBasket, unwantedFruit) {
  return fruitBasket.filter((item) => item !== unwantedFruit);
}

module.exports = {
  sanitizeFruitBasket,
};

// ! Unit tests (using Jest)
describe('js-wk3-ex3-lemonAllergy', () => {
  test('sanitizeFruitBasket should take two parameters', () => {
    expect(sanitizeFruitBasket.length).toBe(2);
  });

  test('sanitizeFruitBasket should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    sanitizeFruitBasket(originalFruitBasketContents, 'lemon');
    expect(originalFruitBasketContents).toEqual(fruitBasket);
  });

  test('sanitizeFruitBasket should return a new array that does not include the unwanted `lemon`', () => {
    expect(
      sanitizeFruitBasket(
        [
          'apple',
          'lemon',
          'grapefruit',
          'lemon',
          'banana',
          'watermelon',
          'lemon',
        ],
        'lemon'
      ).includes('lemon')
    ).toBeFalsy();
  });
});
