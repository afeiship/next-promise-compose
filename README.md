# next-promise-compose
> Promise compose for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-promise-compose
```

## usage
```js
import '@jswork/next-promise-compose';

const double = x => x * 2;
const square = x => x * x;
const plus3 = x => new Promise(resolve => setTimeout(() => resolve(x + 3), 100));

nx.promiseCompose(plus3, square, double)(2)
  .then(result => {
    console.log(result);  // 50
  })
  .catch(console.error);
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-promise-compose/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-promise-compose
[version-url]: https://npmjs.org/package/@jswork/next-promise-compose

[license-image]: https://img.shields.io/npm/l/@jswork/next-promise-compose
[license-url]: https://github.com/afeiship/next-promise-compose/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-promise-compose
[size-url]: https://github.com/afeiship/next-promise-compose/blob/master/dist/next-promise-compose.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-promise-compose
[download-url]: https://www.npmjs.com/package/@jswork/next-promise-compose
