export function phoneCheck(number) {
    number.replace(/\D/, '');
    if (/^\86/.test(number)) {
        number.replace(/^8/, '7')
    }
    if (/^7/.test(number)) {
        number.replace(/^7/, '+7');
    } else {
        number.replace(/^8/, '+8');
    }
}