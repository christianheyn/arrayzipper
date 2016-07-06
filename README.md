# arrayZipper

[![Build Status](https://travis-ci.org/christianheyn/arrayzipper.svg?branch=master)](https://travis-ci.org/christianheyn/arrayzipper)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


**zip two or more arrays to one**


_Usage:_

```js
var arrayZipper = require('arrayzipper'),
	myArrays = [
        [0, 3, 6, 8],
        [1, 4, 7],
        [2, 5]
    ],
    resultArray = arrayZipper(myArrays);
    console.log(resultArray);// -> [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

```js
var arrayZipper = require('arrayzipper'),
	myArrays = [
        ['h', 'l', 'w', 'r', 'd', '!'],
        ['e', 'o',],
        ['l', ' ', 'o', 'l']
    ],
    resultArray = arrayZipper(myArrays);
    console.log(resultArray);// -> [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]
```

___


_This repo is `commitizen` friendly. Find more information about that [here](http://commitizen.github.io/cz-cli/)._

**Author**
[Christian Heyn](https://github.com/christianheyn)