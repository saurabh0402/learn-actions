const { sum } = require('./helpers');

test('Basic two number sum', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(42, 58)).toBe(100);
  expect(sum(56, 59)).toBe(115);
});

test('X numbers sum', () => {
  expect(sum(1, 2, 3, 4)).toBe(10);
  expect(sum(50, 60, 70, 80)).toBe(260);
  expect(sum(11, 22, 33)).toBe(66);
});
