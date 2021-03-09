import hello from './main';

test('hello world test', () => {
  expect(hello('message')).toBe(true);
});