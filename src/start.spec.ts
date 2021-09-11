import calc from './start';

describe('StartApp', () => {
  
  test('should say hello', () => {
    expect(calc.hello()).toBe('hello');
  });

});
