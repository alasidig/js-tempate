const hello = require('./index');

test('outputs the correct value', () => {
    expect(hello(1)).toBe(1);
});