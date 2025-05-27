// ! Function to be tested
function doubleEvenNumbers(numbersArr) {
  return numbersArr.filter((item) => item % 2 === 0).map((elem) => elem * 2);
}

// ! Unit test (using Jest)
describe('js-wk3-ex1-doubleEvenNumbers', () => {
  test('doubleEvenNumbers should take the even numbers and double them', () => {
    const actual = doubleEvenNumbers([1, 2, 3, 4]);
    const expected = [4, 8];
    expect(actual).toEqual(expected);
  });
});
