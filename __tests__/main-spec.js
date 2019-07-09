const main = require('../main');

it ('should return true when start number is smaller than end number', () => {
    expect(main.isStartNumberSmallerThanEndNumber(2,3)).toBe(true);
});

it ('should return false when start number is bigger than end number', () => {
    expect(main.isStartNumberSmallerThanEndNumber(3,2)).toBe(false);
});

it ('should return true when start number is equal end number', () => {
    expect(main.isStartNumberSmallerThanEndNumber(3,3)).toBe(true);
});

it ('should return true when start number is between 1,1000 and end number is between 1,1000', () => {
    expect(main.isInRangeOfTo1000(2,3)).toBe(true);
});

it ('should return true when start number is not between 1,1000 and end number is between 1,1000', () => {
    expect(main.isInRangeOfTo1000(1001,3)).toBe(false);
});

it ('should return true when start number is between 1,1000 and end number is not between 1,1000', () => {
    expect(main.isInRangeOfTo1000(2,3000)).toBe(false);
});

it ('should return true when start number is not between 1,1000 and end number is not between 1,1000', () => {
    expect(main.isInRangeOfTo1000(2000,30000)).toBe(false);
});

it ('should return 2 * 2 = 4 when start number is 2 and end number is 2', () => {
    expect(main.createMultiplyEquation(2,2)).toBe('2 * 2 = 4');
});

it ('should return 2 * 4 = 8 when start number is 2 and end number is 4', () => {
    expect(main.createMultiplyEquation(2,4)).toBe('2 * 4 = 8');
});

it('should return 2*2... when start number is 2 and end number is 4', function () {
    expect(main.generateMultiplyTable(2,4)).toBe('2 * 2 = 4 \n' +
        '2 * 3 = 6 3 * 3 = 9 \n' +
        '2 * 4 = 8 3 * 4 = 12 4 * 4 = 16 \n');
});

it('should return 2 * 2 = 4... when start number is 2 and end number is 4', function () {
    expect(main.createMultiplyTable(2,4)).toBe('2 * 2 = 4 \n' +
        '2 * 3 = 6 3 * 3 = 9 \n' +
        '2 * 4 = 8 3 * 4 = 12 4 * 4 = 16 \n');
});