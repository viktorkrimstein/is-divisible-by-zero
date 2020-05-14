# is-divisible-by-zero

[![NPM version](https://img.shields.io/npm/v/is-divisible-by-zero.svg?style=flat)](https://www.npmjs.com/package/is-divisible-by-zero)
[![NPM monthly downloads](https://img.shields.io/npm/dm/is-divisible-by-zero.svg?style=flat)](https://npmjs.org/package/is-divisible-by-zero)
[![NPM total downloads](https://img.shields.io/npm/dt/is-divisible-by-zero.svg?style=flat)](https://npmjs.org/package/is-divisible-by-zero)
[![Linux Build Status](https://img.shields.io/travis/viktorkrimstein/is-divisible-by-zero.svg?style=flat&label=Travis)](https://travis-ci.org/viktorkrimstein/is-divisible-by-zero)

> Returns always `false` since everything is not divisible by `0`.

Please consider following this project's author, [Viktor Krimstein](https://github.com/viktorkrimstein), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm install --save is-divisible-by-zero
```

## Usage

Works with literally any input.

```js
const isDivisibleByZero = require("is-divisible-by-zero");

console.log(isDivisibleByZero(1));  //=> false
console.log(isDivisibleByZero("string"));  //=> false
console.log(isDivisibleByZero('c'));  //=> false
console.log(isDivisibleByZero(bool));  //=> false
```

### Author

#### Viktor Krimstein

* [LinkedIn Profile](https://linkedin.com/in/viktor-krimstein)
* [GitHub Profile](https://github.com/viktorkrimstein)
* [Twitter Profile](https://twitter.com/viktorkrimstein)

### License

Copyright © 2020, [Viktor Krimstein](https://github.com/viktorkrimstein).
Released under the [Apache-2.0 License](LICENSE).
