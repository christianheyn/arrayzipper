# arrayZipper

**zip two or more arrays to one**

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

## Test
```sh
$ npm test
```
___


#### have fun

_This repo is `commitizen` friendly. Find more information about that [here](http://commitizen.github.io/cz-cli/)._

**Author**
[Christian Heyn](https://github.com/christianheyn)