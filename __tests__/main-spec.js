const main = require('../main');

/**
given a tuple like (2,3)
when call method isStartNumberSmallerThanEndNumber
then return true
**/
it ('should return true when start number is smaller than end number', () => {
    expect(main.isStartNumberSmallerThanEndNumber(2,3)).toBe(true);
});

/**
given a tuple like (3,2)
when call method isStartNumberSmallerThanEndNumber
then return false
**/
it ('should return false when start number is bigger than end number', () => {
    expect(main.isStartNumberSmallerThanEndNumber(3,2)).toBe(false);
});

/**
given a tuple like (3,3)
when call method isStartNumberSmallerThanEndNumber
then return true
**/
it ('should return true when start number is equal end number', () => {
    expect(main.isStartNumberSmallerThanEndNumber(3,3)).toBe(true);
});

/**
given a tuple like (2,3)
when call method isInRangeOfTo1000
then return true
**/
it ('should return true when start number is between 1,1000 and end number is between 1,1000', () => {
    expect(main.isInRangeOfTo1000(2,3)).toBe(true);
});

/**
given a tuple like (1001,3)
when call method isInRangeOfTo1000
then return false
**/
it ('should return true when start number is not between 1,1000 and end number is between 1,1000', () => {
    expect(main.isInRangeOfTo1000(1001,3)).toBe(false);
});

/**
given a tuple like (2,3000)
when call method isInRangeOfTo1000
then return false
**/
it ('should return true when start number is between 1,1000 and end number is not between 1,1000', () => {
    expect(main.isInRangeOfTo1000(2,3000)).toBe(false);
});

/**
given a tuple like (2000,3000)
when call method isInRangeOfTo1000
then return false
**/
it ('should return true when start number is not between 1,1000 and end number is not between 1,1000', () => {
    expect(main.isInRangeOfTo1000(2000,30000)).toBe(false);
});

/**
given a tuple like (2,2)
when call method createMultiplyEquation
then return 2 * 2 = 4
**/
it ('should return 2 * 2 = 4 when start number is 2 and end number is 2', () => {
    expect(main.createMultiplyEquation(2,2)).toBe('2 * 2 = 4');
});

/**
given a tuple like (2,4)
when call method createMultiplyEquation
then return 2 * 4 = 8
**/
it ('should return 2 * 4 = 8 when start number is 2 and end number is 4', () => {
    expect(main.createMultiplyEquation(2,4)).toBe('2 * 4 = 8');
});

/**
given a tuple like (2,4)
when call method generateMultiplyTable
then return 2 * 2 = 4...
**/
it('should return 2*2... when start number is 2 and end number is 4', function () {
    expect(main.generateMultiplyTable(2,4)).toBe('2 * 2 = 4 \n' +
        '2 * 3 = 6 3 * 3 = 9 \n' +
        '2 * 4 = 8 3 * 4 = 12 4 * 4 = 16 \n');
});

/**
given a tuple like (2,4)
when call method createMultiplyTable
then return 2 * 2 = 4...
**/
it('should return 2 * 2 = 4... when start number is 2 and end number is 4', function () {
    expect(main.createMultiplyTable(2,4)).toBe('2 * 2 = 4 \n' +
        '2 * 3 = 6 3 * 3 = 9 \n' +
        '2 * 4 = 8 3 * 4 = 12 4 * 4 = 16 \n');
});

/**
given a tuple like (4,2)
when call method createMultiplyTable
then return null
**/
it('should return null when start number is 4 and end number is 2', function () {
    expect(main.createMultiplyTable(4,2)).toBe(null);
});
