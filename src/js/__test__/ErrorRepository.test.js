import ErrorRepository from '../ErrorRepository';

const map = new ErrorRepository();

test('check error 0', () => {
  const expected = 'good error';
  const received = map.translate(0);
  expect(received).toBe(expected);
});

test('check error 1', () => {
  const expected = 'ok error';
  const received = map.translate(1);
  expect(received).toBe(expected);
});

test('check error 2', () => {
  const expected = 'about ok error';
  const received = map.translate(2);
  expect(received).toBe(expected);
});

test('check error 3', () => {
  const expected = 'near ok error';
  const received = map.translate(3);
  expect(received).toBe(expected);
});

test('check error 4', () => {
  const expected = 'not ok error';
  const received = map.translate(4);
  expect(received).toBe(expected);
});

test('check error 5', () => {
  const expected = 'bad error';
  const received = map.translate(5);
  expect(received).toBe(expected);
});

test('check error 6', () => {
  const expected = 'uknown error';
  const received = map.translate(6);
  expect(received).toBe(expected);
});
