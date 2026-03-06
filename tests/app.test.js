const { add, subtract, multiply, divide } = require('../index');

test('add 3 + 2 = 5', () => {
    expect(add(3, 2)).toBe(5);
});

test('subtract 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('multiply 3 * 4 = 12', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('divide 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divide by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});