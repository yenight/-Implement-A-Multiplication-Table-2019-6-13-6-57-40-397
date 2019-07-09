function createMultiplyTable(startNumber, endNumber) {
    var isInRange = isInRangeOfTo1000(startNumber, endNumber);
    var isStartSmallerThanEnd = isStartNumberSmallerThanEndNumber(startNumber, endNumber);
    if (isInRange && isStartSmallerThanEnd) {
        return generateMultiplyTable(startNumber, endNumber);
    } else {
        return null;
    }
}

function generateMultiplyTable(startNumber, endNumber) {
    var multiplyTable = ''
    var row = endNumber - startNumber + 1;
    for (var i = startNumber; i <= endNumber; i++) {
        for (var j = startNumber; j <= i; j++) {
            var multiplyEuqation = createMultiplyEquation(j, i);
            multiplyTable += multiplyEuqation + ' ';
        }
        multiplyTable += '\n';
    }
    return multiplyTable;
}

function isInRangeOfTo1000 (startNumber, endNumber) {
    if (startNumber < 1 || startNumber > 1000 || endNumber < 1 || endNumber > 1000) {
        return false;
    } else {
        return true;
    }
}

function isStartNumberSmallerThanEndNumber (startNumber, endNumber) {
    if (startNumber <= endNumber) {
        return true;
    } else {
        return false;
    }
}

function createMultiplyEquation (startNumber, endNumber) {
    var equation = startNumber + ' * ' + endNumber + ' = ' + startNumber * endNumber;
    return equation;
}

exports.isInRangeOfTo1000 = isInRangeOfTo1000;
exports.isStartNumberSmallerThanEndNumber = isStartNumberSmallerThanEndNumber;
exports.createMultiplyEquation = createMultiplyEquation;
exports.generateMultiplyTable = generateMultiplyTable;
exports.createMultiplyTable = createMultiplyTable;