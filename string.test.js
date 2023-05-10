const stringLength = require("./string");

test("find string length", () => {
  expect(stringLength("AAA")).toBe(3);
  expect(() => stringLength('')).toThrow('String must be at least 1 character long');
  expect(() => stringLength('ABCDEFGHIJKL')).toThrow('String must not be longer than 10 characters');
});

const reverseString = require("./task2");
test("reverse string", () => {
  expect(reverseString("shalini")).toBe("inilahs");
});

const Calculator = require("./task3");
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toEqual(5);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toEqual(-5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toEqual(-1);
    });
  });
});
  

  const  capitalize = require("./task4");

  test('capitalize function capitalizes the first character in a string', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });
