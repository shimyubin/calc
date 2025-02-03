function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a- b;
}

function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function testAdd() {
  console.log(add(1, 1) === 2);
}

function testSubtract() {
  console.log(subtract(2, 1) === 1);
}

function testMultiply() {
  console.log(multiply(3, 3) === 9);
}

function testDiv() {
  console.log(div(3, 3) === 1);
}