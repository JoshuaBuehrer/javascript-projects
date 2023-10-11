let checkFive = require('../checkFive');

describe('tests checkFive function', () => {

    test('if number is less than 5', () => {
        output = checkFive(2);
        expect(output).toEqual('2 is less than 5.')
    })

    test('if number is equal to 5', () => {
        output = checkFive(5);
        expect(output).toEqual('5 is equal to 5.')
    })

    test('if number is greater than 5', () => {
        output = checkFive(8);
        expect(output).toEqual('8 is greater than 5.')
    })
})