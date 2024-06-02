import { exampleFunction } from '../src/example';

test('exampleFunction returns correct string', () => {
  expect(exampleFunction('Test')).toBe('Received: Test');
});
