const { add } = require('../src/utils');

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });
});
