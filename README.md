<div align="center">

![logo][logo]

<br/>

![download status][download-badge]
![version][version-badge]
![MIT License][license-badge]
![semantic-release][semantic-badge]

</div>

## Table of Contents <!-- omit in toc -->

<!-- cspell:disable -->

- [Installation](#installation)
- [Usage](#usage)
  - [Array](#array)
    - [ensureArray](#ensurearray)
    - [getRandom](#getrandom)
    - [range](#range)
    - [toArray](#toarray)
    - [copayArray](#copayarray)
    - [shuffle](#shuffle)
    - [compact](#compact)
  - [concatNullableArrays](#concatnullablearrays)
  - [Env](#env)
    - [getEnv](#getenv)
    - [getRequiredEnv](#getrequiredenv)
    - [getNodeEnv](#getnodeenv)
    - [is](#is)
    - [isDev](#isdev)
    - [isProd](#isprod)
    - [isTest](#istest)
  - [Function](#function)
    - [noop](#noop)
    - [callAll](#callall)
    - [not](#not)
    - [passesMin](#passesmin)
  - [Guards](#guards)
    - [isString](#isstring)
    - [isIterable](#isiterable)
    - [isFunction](#isfunction)
    - [isNull](#isnull)
    - [isNotNull](#isnotnull)
    - [isTruthy](#istruthy)
    - [isObject](#isobject)
  - [Number](#number)
    - [safeDivide](#safedivide)
    - [clamp](#clamp)
    - [randomInt](#randomint)
    - [toInteger](#tointeger)
    - [isInRange](#isinrange)
  - [Object](#object)
    - [pruneNullOrEmpty](#prunenullorempty)
  - [String](#string)
    - [toSpaceCase](#tospacecase)
    - [toCamelCase](#tocamelcase)
    - [toSnakeCase](#tosnakecase)
    - [toKebabCase](#tokebabcase)
    - [toPascalCase](#topascalcase)
    - [isNullOrEmpty](#isnullorempty)
  - [Nullable](#nullable)
    - [bind](#bind)
  - [Regex](#regex)
    - [testRegex](#testregex)
  - [Error](#error)
    - [throwErr](#throwerr)
    - [assert](#assert)
- [types](#types)
  - [Truthy\<T>](#truthyt)
  - [CamelCase\<T>](#camelcaset)
  - [Predicate\<T>](#predicatet)
  - [RequiredBy<T, K>](#requiredbyt-k)
  - [PartialBy<T, K>](#partialbyt-k)
  - [FilterNullish\<T>](#filternullisht)
- [Credits](#credits)

<!-- cspell:enable -->

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

#### getRandom

get a random element from an array

```typescript
getRandom([1, 2, 3]); // 1 or 2 or 3
getRandom([]); // undefined
getRandom('list'); // Error: not an array
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

#### copayArray

Gets an array and return shallow copy version of it

```typescript
copyArray([]);   // []
copyArray([1]);  // []
```

#### shuffle

Gets an array and return a shuffled version of it

```typescript
copyArray([]);                // []
copyArray([1]);               // [1]
copyArray([1, 2, 3 ,4 , 5]);  // [2, 1, 3, 4, 5]
```

#### compact

filters nulls from array

```typescript
compact([1, false, null, 2, undefined]); // [1, false, 2]
compact([NaN, false, null, 0, undefined]); // [NaN, false, 0]

```

### concatNullableArrays

concatNullableArrays(...maybeArrays)

```typescript
concatNullableArrays(null);                            // []
concatNullableArrays(undefined);                       // []
concatNullableArrays([]);                              // []
concatNullableArrays([1]);                             // [1]
concatNullableArrays(undefined, [1, 2], null);         // [1,2]
concatNullableArrays(undefined, [1, 2], null, [2, 3]); // [1, 2, 2, 3]
```
---

### Env

#### getEnv

get environment variable or given fallback

getEnv<TEnvKey, TValue>(name, fallback)

```typescript
// FOO=foo BAR=bar node
Env.getEnv<TEnvKey>('FOO');        // foo
Env.getEnv<TEnvKey>('BAR');        // undefined
Env.getEnv<TEnvKey>('BAR', 'bar'); // bar
```

#### getRequiredEnv

get environment variable or throw

getRequiredEnv<TEnvKey, TValue>(name)

```typescript
// FOO=foo BAR=bar node
Env.getRequiredEnv<TEnvKey>('FOO');        // foo
Env.getRequiredEnv<TENvKey>('BAR');        // Error: BAR is required
```

#### getNodeEnv

give NODE_ENV value or given fallback value

getNodeEnv<T>(fallback)

```typescript
// NODE_ENV=anything node
Env.getNodeEnv();                       // undefined
Env.getNodeEnv<'anything'>('anything'); // 'anything'
Env.getNodeEnv<'not'>('not');           // undefined
```

#### is

strict check NODE_ENV with given value

```typescript
// NODE_ENV=production node
Env.is('development'); // false
Env.is('production');  // true
```

#### isDev

check env is 'development'

```typescript
// NODE_ENV=development node
Env.isDev; // true
```

#### isProd

check env is 'production'

```typescript
// NODE_ENV=production node
Env.isProd; // true
```

#### isTest

check env is 'test'

```typescript
// NODE_ENV=test node
Env.isTest; // true
```

---

### Function

#### noop

No operation ??\\\_(???)_/??

```typescript
  noop() // undefined
```

#### callAll

HOC that call all given functions

```typescript
  callAll(foo, bar, baz)(...args)                         // void (foo(...args), bar(...args), baz(...args));
  callAll(bar,'string', 5, null, undefined, baz)(...args) // void (bar(...args), baz(...args));
```

#### not

returns the "NOT" of its argument

```typescript
  not(true)  // false
  not(false) // true
  not(0)     // true
```
#### passesMin

returns true if specified minimum predicates pass the given value otherwise false
```typescript
const isDivisibleBy3 = x => x % 3 === 0
const isDivisibleBy5 = x => x % 5 === 0
const isLargerThan25 = x => x > 25

const isValidNumber = x => passesMin(2, [isDivisibleBy3, isDivisibleBy5, isSmallerThan25], x);

isValidNumber(15) //returns true because its divisible by 5 and 3
isValidNumber(3)  //returns false because its only divisible by 3
isValidNumber(26) //returns false because its only larger than 25
isValidNumber(30) //returns true because its passes minimum 2 cases (being divisible by 5 and 3 and larger than 25)
```

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

#### isNull

check given value is either null or undefined

```typescript
isNull(undefined) // true
isNull(null)      // true
isNull(0)         // false
isNull(false);    // false
isNull({});       // false
isNotNull([]);    // false
```

#### isNotNull

check given value is neither null nor undefined

```typescript
isNotNull(undefined) // false
isNotNull(null)      // false
isNotNull(0)         // true
isNotNull(false);    // true
isNotNull({});       // true
isNotNull([]);       // true
```

#### isTruthy

check given value is truthy

```typescript
isNotNull(undefined) // false
isNotNull(null)      // false
isNotNull(0)         // false
isNotNull(false);    // false
isNotNull({});       // true
isNotNull([]);       // true
isNotNull(NaN);      // false
```

---

#### isObject

check given value is an object

```typescript
isObject('hello world');         // false
isObject(null);                  // false
isObject(true);                  // false
isObject([]);                    // false
isObject({ x: 'word'});          // true
isObject({ 2: 'numeric index'}); // true
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

### Object

#### pruneNullOrEmpty

remove null and empty property from an object

```typescript
pruneNullOrEmpty({ name: 'John', age: null, status: '', nickname: undefined }) // {  name: 'John'  }
pruneNullOrEmpty({ foo: { bar: null } }) // { foo: { bar: null } }
pruneNullOrEmpty({ foo: {} })            // { name: {} }
pruneNullOrEmpty({ foo: { length: 0 } }) // { name: { length: 0 } }
pruneNullOrEmpty({ foo: [] })            // { name: [] }
```

### String

#### toSpaceCase

convert any casing to space separated lowercase

```typescript
toSpaceCase('');              // ''
toSpaceCase('foo bar');       // 'foo bar'
toSpaceCase('foo-bar');       // 'foo bar'
toSpaceCase('fooBar');        // 'foo bar'
toSpaceCase('foo_bar');       // 'foo bar'
toSpaceCase('FOO-barCode');   // 'foo bar code'
toSpaceCase('foo -bar _BAZ'); // 'foo -bar _baz'
```

#### toCamelCase

transforms a valid casing to camelCase
if the given value is invalid it just returns the input

```typescript
toCamelCase('');              // ''
toCamelCase('foo bar');       // 'fooBar'
toCamelCase('foo-bar');       // 'fooBar'
toCamelCase('fooBar');        // 'fooBar'
toCamelCase('foo_bar');       // 'fooBar'
toCamelCase('FOO-barCode');   // 'FOO-barCode'
```

#### toSnakeCase

transforms a valid casing to snake_case
if the given value is invalid it just returns the input

```typescript
toCamelCase('');              // ''
toCamelCase('foo bar');       // 'foo_bar'
toCamelCase('foo-bar');       // 'foo_bar'
toCamelCase('fooBar');        // 'foo_bar'
toCamelCase('foo_bar');       // 'foo_bar'
toCamelCase('FOO-barCode');   // 'FOO-barCode'
```

#### toKebabCase

transforms a valid casing to kebab-case
if the given value is invalid it just returns the input

```typescript
toCamelCase('');              // ''
toCamelCase('foo bar');       // 'foo-bar'
toCamelCase('foo-bar');       // 'foo-bar'
toCamelCase('fooBar');        // 'foo-bar'
toCamelCase('foo_bar');       // 'foo-bar'
toCamelCase('FOO-barCode');   // 'FOO-barCode'
```
#### toPascalCase

transforms a valid casing to PascalCase
if the given value is invalid it just returns the input

```typescript
toCamelCase('');              // ''
toCamelCase('foo bar');       // 'FooBar'
toCamelCase('foo-bar');       // 'FooBar'
toCamelCase('fooBar');        // 'FooBar'
toCamelCase('foo_bar');       // 'FooBar'
toCamelCase('FOO-barCode');   // 'FOO-barCode'
```

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

###  Nullable

  
 ###  Nullable\<T>

```typescript
type name = Nullable<string> // null | string
```

####  bind

bind nullable function together

```typescript

const  f  = (x:  string):  string[] =>  x.split('');
const  g  = (x:  string[]):  number  =>  Number.parseInt(x[0]!, 10);
const  h  = (x:  number):  Nullable<number> => (Number.isNaN(x) ? null : x);
const  k  = (x:  number):  string  => (x === 2 ? 'yes' : 'no');

bind('2', f, g, h, k); // 'yes'
bind('3', f, g, h, k); // 'no'
bind('n', f, g, h, k); // null
bind(null, f, g, h, k); // null

```

### Regex

#### testRegex

Check if a string passes a specific regex

```typescript
testRegex(/[A-Z]/, "Abc")     // true
testRegex(/^\d+$/, "2021")    // true
testRegex(/[a-z]/, "( ???? ???? ????)")  // false

const r = /abc/g
r.test('abc') // true
r.test('abc') // false

testRegex(r, 'abc') // true
testRegex(r, 'abc') // true
```

### Error

#### throwErr

throws the given value

```typescript
throwError(new Error('msg')) // Uncaught Error: msg
throwErr('error')            // Uncaught 'error'
throwErr(404)                // Uncaught 404
throwError({})               // Uncaught {}
```

#### assert

throws an error when the condition is false.

```typescript
assert(false)           // throw new Error('Assertion failed')
assert(false, 'Error')  // throw new Error('Error')
assert(true, 'Error')   // undefined
```

```typescript
throwError(new Error('msg')) // Uncaught Error: msg
throwErr('error')            // Uncaught 'error'
throwErr(404)                // Uncaught 404
throwError({})               // Uncaught {}
```

## types

### Truthy\<T>

Type guard for truthy values

```typescript
type X = 1 | 0 | '' | boolean | null | 'String';
type TX = Truthy<X> // 1 | true | 'String'
```

### CamelCase\<T>

Converts snake_case values in a type to camelCase

```typescript
type X = 'literal_item_0' | 'LITERAL_ITEM_1' | 'LiTeraL_ItEm_2' | 'it_a_recursive_types';
type TX = CamelCase<X> // 'literalItem0' | 'literalItem1' | 'literalItem2' | 'itsARecursiveTypes';
```

### Predicate\<T>

Predicate function type

```typescript
type Predicate<T> // (a: T) => boolean;
````

### MaybePromise\<T>

```typescript
type MaybePromise<T> // T | Promise<T>;
````

### VoidFn<TArgs = any[]>

```typescript
type VoidFn    = (...args: any) => void | Promise<void>;
type VoidFn<T> = ( ...args: T) => void | Promise<void>;
````

### EnvironmentVariable<T extends string>

```typescript
type EnvironmentVariable = string | undefined;
type EnvironmentVariable<T> = T | undefined;
````

### NodeEnv<T extends string>

```typescript
type NodeEnv    = 'production' | 'development | undefined;
type NodeEnv<T> = 'production' | 'development | undefined | T;
````

### ObjectPath\<T>
```typescript
const foo = {
  bar: {
    baz: {
      qux: 'qux',
    },
  },
};
type FooObjectPath = ObjectPath<typeof foo>; // "bar" | "bar.baz" | "bar.baz.qux"
```

### RequiredBy<T, K>

Create type from type `T` with `K` keys are required.

```typescript
interface Foo {
  x? : string;
  y?: string;
}

type Bar = RequiredBy<T, 'x'> // { x: string, y?: string }
```

### PartialBy<T, K>

Create type from type `T` with `K` keys are optional.

```typescript
interface Foo {
  x : string;
  y: string;
}

type Bar = PartialBy<T, 'x'> // { x?: string, y: string }
```

### FilterNullish\<T>

```typescript
type Arr    = FilterNullish<(number | undefined | string | null)[]>          // (number | string)[]
type Tuple  = FilterNullish<[number, null, string, undefined]>               // [number, string]
type RArr   = FilterNullish<readonly (number | undefined | string | null)[]> // readonly (number | string)[]
type RTuple = FilterNullish<readonly [number, null, string, undefined]>      // readonly [number, string]
```

## Credits

<div>Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

[logo]: https://raw.githubusercontent.com/fullstacksjs/toolbox/master/assets/logo.svg
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/toolbox?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/toolbox?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/toolbox?color=6464E2&label=LICENSE&style=flat-square
[semantic-badge]: https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release&color=6464E2&label=SEMANTIC&style=flat-square (https://github.com/semantic-release/semantic-release)
