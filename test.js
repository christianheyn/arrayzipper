var tape = require('tape'),
    arrayZipper = require('./index.js');

tape('arrayZipper', function (test) {
    test.equal(typeof arrayZipper, 'function', 'is a function');
    test.deepEqual(arrayZipper(), [],
        'returns an empty array if no array is given as parameter');
    test.deepEqual(arrayZipper([]), [],
        'returns an empty array if an empty array is given as parameter');

    var testArray = [
            [0, 3, 6, 8],
            [1, 4, 7],
            [2, 5]
        ],
        testArrayLength = testArray[0]
            .concat(testArray[1])
            .concat(testArray[2])
            .length,
        testArray2 = [
            [],
            ['a', 'c'],
            ['b', 'd', 'e', 'f']
        ],
        resultArray = arrayZipper(testArray),
        resultArray2 = arrayZipper(testArray2);

    test.comment(' zip [0, 3, 6, 8] and [1, 4, 7] and [2, 5]');
    test.equal(resultArray[0], 0, 'resultArray[0] is equal to 0');
    test.equal(resultArray[4], 4, 'resultArray[4] is equal to 4');
    test.equal(resultArray[8], 8, 'resultArray[8] is equal to 8');
    test.comment(' result array length is equal to all given array length');
    test.equal(resultArray.length, testArrayLength);

    test.comment(' zip [] and [\'a\', \'c\'] and [\'b\', \'d\', \'e\', \'f\']');
    test.equal(resultArray2[0], 'a', 'resultArray[0] is equal a');
    test.equal(resultArray2[2], 'c', 'resultArray[2] is equal c');
    test.equal(resultArray2[5], 'f', 'resultArray[5] is equal f');

    test.end();
    
});
