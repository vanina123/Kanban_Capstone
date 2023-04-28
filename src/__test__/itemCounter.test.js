import itemCounter from '../modules/itemCounter.js';

test('test for number of items', () => {
  const testData = [{ meal: 'first' }, { meal: 'second' }, { meal: 'third' }, { meal: 'fourth' }, { meal: 'fith' }];

  expect(itemCounter(testData)).toBe(5);
});

test('test for number of items', () => {
  const testData = [{ meal: 'first' }, { meal: 'second' }, { meal: 'third' }];

  expect(itemCounter(testData)).toBe(3);
});

test('test for number of items', () => {
  const testData = [{ meal: 'first' }, { meal: 'second' }];

  expect(itemCounter(testData)).toBe(2);
});