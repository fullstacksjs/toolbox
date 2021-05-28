<div align="center">

![logo][logo]

<br/>

![download status][download-badge]
![version][version-badge]
![MIT License][license-badge]

</div>

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [Array](#array)
    - [ensureArray](#ensurearray)
    - [range](#range)
    - [toArray](#toarray)
  - [Env](#env)
    - [getEnv](#getenv)
    - [getRequiredEnv](#getrequiredenv)
    - [getNodeEnv](#getnodeenv)
    - [is](#is)
    - [match](#match)
    - [isDev](#isdev)
    - [isProd](#isprod)
    - [isTest](#istest)
  - [Function](#function)
    - [noop](#noop)
    - [callAll](#callall)
  - [Guards](#guards)
    - [isString](#isstring)
    - [isIterable](#isiterable)
    - [isFunction](#isfunction)
  - [Number](#number)
    - [safeDivide](#safedivide)
    - [clamp](#clamp)
    - [randomInt](#randomint)
    - [toInteger](#tointeger)
    - [isInRange](#isinrange)
  - [String](#string)
    - [isNullOrEmpty](#isnullorempty)
- [Credits](#credits)

## Installation

```sh
$ npm add --save-dev @fullstacksjs/toolbox
```

or using yarn

```sh
$ yarn add --dev @fullstacksjs/toolbox
```

## Usage

### Array

#### ensureArray

force a value to an array

ensureArray(value)

```typescript
ensureArray(null);           // [null]
ensureArray(undefined);      // [undefined]
ensureArray('string');       // ['string']
ensureArray(['array']);      // ['array']
ensureArray([1, 2, 3]);      // [1, 2, 3]
ensureArray({ foo: 'bar' }); // [{ foo: 'bar' }]
```

#### range

create array of length n with from offset with an step

range(length, { offset, step })

```typescript
range(0);                          // []
range(10);                         // [0,1,2,3,4,5,6,7,8,9]
range(3, { offset: 5 });           // [5,6,7]
range(3, { offset: -2, step: 10}); // [-2, 8, 18]
```

#### toArray

Convert a value to an array

toArray(value)

```typescript
toArray(null);       // []
toArray(undefined);  // []
toArray('string');   // ['string']
toArray(['array']);  // ['array']
toArray(iteratable); // [...iteratable]
toArray(others);     // [others]
```

---

### Env

#### getEnv

get environment variable or given fallback

getEnv(name, fallback)

```typescript
// FOO=foo BAR=bar node
env.getEnv('FOO');        // foo
env.getEnv('BAR');        // undefined
env.getEnv('BAR', 'bar'); // bar
```

#### getRequiredEnv

get environment variable or given fallback or throw

getRequiredEnv(name, fallback)

```typescript
// FOO=foo BAR=bar node
env.getRequiredEnv('FOO');        // foo
env.getRequiredEnv('BAR', 'bar'); // bar
env.getRequiredEnv('BAR');        // Error: BAR is required
```

#### getNodeEnv

give NODE_ENV value or given fallback value

getNodeEnv(fallback)

```typescript
env.getNodeEnv();           // undefined
env.getNodeEnv('anything'); // 'anything'
// NODE_ENV=anything
env.getNodeEnv();           // null
```

#### is

strict check NODE_ENV with given value

```typescript
// NODE_ENV=production node
env.is('development'); // false
env.is('production');  // true
```

#### match

check NODE_ENV starts with given value (case insensitive)

```typescript
// NODE_ENV=production node
env.match('prod');        // true
env.match('PROD');        // true
env.match('ProductioN');  // true
env.match('duction');     // false
env.match('development'); // false
```

#### isDev

check env matches 'development'

```typescript
// NODE_ENV=development node
env.isDev(); // true
```

#### isProd

check env matches 'production'

```typescript
// NODE_ENV=production node
env.isProd(); // true
```

#### isTest

check env matches 'test'

```typescript
// NODE_ENV=test node
env.isTest(); // true
```

---

### Function

#### noop

No operation ¯\\\_(ツ)_/¯

```typescript
  noop() // undefined
```

#### callAll

HOC that call all given functions

```typescript
  callAll(foo, bar, baz)(...args)                         // void (foo(...args), bar(...args), baz(...args));
  callAll(bar,'string', 5, null, undefined, baz)(...args) // void (bar(...args), baz(...args));
```

---

### Guards

#### isString

check given value is string or not

```typescript
isString();      // false
isString(1);     // false
isString(['1']); // false
isString('1');   // true
```

#### isIterable

check given value is iterable or not

```typescript
isIterable([]);                           // true
isIterable(new Map());                    // true
isIterable({ [Symbol.iterator]() { } });  // true
isIterable('some');                       // true
isIterable({});                           // false
isIterable();                             // false
```

#### isFunction

check given value is function or not

```typescript
isFunction(() => {}); // true
isFunction();         // false
isFunction(true);     // false
```

---

### Number

#### safeDivide

divide two numbers returns fallback if result is not a finite number

```typescript
safeDivide(4, 2);          // 2
safeDivide(4, 0);          // 0
safeDivide(null, NaN);     // 0
safeDivide(null, NaN, 10); // 10
safeDivide(4, 0, 'Oops');  // 'Oops'
```

#### clamp

clamp a number between two values

```typescript
clamp(-10);                        // 0
clamp(10);                         // 1
clamp(-10, { min: -5 });           // -5
clamp(30 , { max: 20 });           // 20
clamp(5  , { min: -20, max: 20 }); // 5
```

#### randomInt

generate random integer number between range.

```typescript
randomRange();                      // <random> 0 -> Number.MAX_SAFE_INTEGER
randomRange({ min: -10, max: 50 }); // <random> -10 -> 50
randomRange({ max: 50 });           // <random> 0 -> 50
randomRange({ min: 50 });           // <random> 50 -> Number.MAX_SAFE_INTEGER
```

#### toInteger

parse string to integer (radix 10)

```typescript
toInteger('100'); // 100
toInteger('1.42'); // 1
```

#### isInRange

Checks if num is between min and max (and including borders).

```typescript
isInRange(100, { min: 0  , max: 50  }); // false
isInRange(100, { min: 0  , max: 100 }); // true
isInRange(100, { min: 50 , max: 150 }); // true
isInRange(100, { min: 100, max: 150 }); // true
```

### String

#### isNullOrEmpty

check given value is null/undefined/empty string/array or not

```typescript
isNullOrEmpty();          // true
isNullOrEmpty(null);      // true
isNullOrEmpty(undefined); // true
isNullOrEmpty('');        // true
isNullOrEmpty('f');       // false
isNullOrEmpty(1);         // false
isNullOrEmpty([]);        // true
isNullOrEmpty([1,2,3]);   // false
```


## Credits

<div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

[logo]: https://raw.githubusercontent.com/fullstacksjs/toolbox/master/assets/logo.svg
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/toolbox?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/toolbox?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/toolbox?color=6464E2&label=LICENSE&style=flat-square
