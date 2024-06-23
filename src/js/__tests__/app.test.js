import { Validator } from '../app';

let testName = '1абвгд1234567&*#@_';
let testFunction = new Validator;
let a = testFunction.validateUsername(testName);

test('username validator test', () => {
    expect(a).toBe(false);
})