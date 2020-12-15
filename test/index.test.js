import getBuffer from '../src';
import ArrayBufferConverter from '../src/ArrayBufferConverter';

test('array buffer 1', () => {
  const testBuffer = getBuffer('вася');
  const converter = new ArrayBufferConverter();
  converter.load(testBuffer);

  expect(converter.toString()).toBe('вася');
});
