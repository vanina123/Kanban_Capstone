import commentCounter from '../modules/commentCounter.js';

test('Test should return number of comment', () => {
  const testData = [{
    item_id: 1,
    username: 'Tom',
    comment: 'Am hungry',
  },
  {
    item_id: 2,
    username: 'Elodie',
    comment: 'Give me more food',
  },
  {
    item_id: 3,
    username: 'Nina',
    comment: 'Can u cook',
  }];

  expect(commentCounter(testData)).toBe(3);
});

test('Test should return number of comment', () => {
  const testData = [{
    item_id: 1,
    username: 'Lari',
    comment: 'Thank you great man',
  },
  {
    item_id: 2,
    username: 'Admas',
    comment: 'I love food',
  },
  {
    item_id: 3,
    username: 'Admas',
    comment: 'Nice food',
  },
  {
    item_id: 4,
    username: 'van',
    comment: 'Great meat',
  },
  ];

  expect(commentCounter(testData)).toBe(4);
});
test('Test should return number of comment', () => {
  const testData = [{
    item_id: 1,
    username: 'Nana',
    comment: 'Nice meal',
  }];

  expect(commentCounter(testData)).toBe(1);
});
