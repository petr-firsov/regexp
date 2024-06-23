import {phoneCheck} from '../phonecheck'

let a = phoneCheck('8 (927) 000-00-00');

test('phonecheck test', () => {
    expect(a).toBe('+79270000000')
})