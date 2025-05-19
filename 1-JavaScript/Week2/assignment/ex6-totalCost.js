let cartForParty = {
  beer: 1.75,
  chips: 0.99,
  salsa: 2.5,
  guacamole: 3.0,
  soda: 1.25,
};

function calculateTotalPrice(groceriesObj) {
  let amount = Object.values(groceriesObj).reduce(
    (acc, value) => acc + value,
    0
  );
  return `Total: €${amount}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.log('Test 1: addToShoppingCart should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log(
    '\nTest 2: return "Total: €9.49" output when passed cartForParty'
  );
  const result = calculateTotalPrice(cartForParty);
  console.assert(result === 'Total: €9.49');
}

function test() {
  test1();
  test2();
}

test();
