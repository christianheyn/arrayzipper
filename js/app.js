(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['arrayZipper'], factory);
    } else if (typeof exports === 'object') {
        // npm
        module.exports = factory;
    } else {
        // Browser global
        window.arrayZipper = factory;
    }
}(function () {
    return (arrayOfArrays) => {
        let resultArray,
            length;

        if (typeof arrayOfArrays == 'undefined'
            || !Array.isArray(arrayOfArrays)
            || arrayOfArrays.length == 0) {
            return [];
        }

        resultArray = [];
        length = arrayOfArrays.length;

        /**
         * Recursion through all arrays
         * @param  {number} counter
         */
        function order (counter) {
            let emptyNumber = 0;

            for (let i = 0; i < length; i += 1) {
                if (typeof arrayOfArrays[i][counter] != 'undefined') {
                    resultArray.push(arrayOfArrays[i][counter]);
                } else {
                    emptyNumber += 1;
                }
            }

            if (emptyNumber < length) {
                return order(counter += 1);
            }

            return resultArray;
        };

        return order(0);
    };
} ()));
