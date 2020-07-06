# Utils

Common JavaScript utility functions

## Arrays

- forceArray: force a value to an array

```javascript
forceArray(null);           //=> [null]
forceArray(undefined);      //=> [undefined]
forceArray('string');       //=> ['string']
forceArray(['array']);      //=> ['array']
forceArray({ foo: 'bar' }); //=> [{ foo: 'bar' }]
```

- toArray: Convert a value to an array

```javascript
toArray(null);      //=> []
toArray(undefined); //=> []
toArray('string');  //=> ['string']
toArray(['array']); //=> ['array']
toArray(itratable); //=> [...iteratable]
toArray(others);    //=> [others]
```

## Function

- noop: No operation ¯\\\_(ツ)_/¯

```javascript
  noop() //=> undefined
```

- callAll: HOC that call all given functions

```javascript
  callAll(foo, bar, baz)(...args)                         //=> void (foo(args), bar(args), baz(args));
  callAll(bar,'string', 5, null, undefined, baz)(...args) //=> void (baz(args));
```


## Numbers

- randomInt: generate random integer number between range.

```javascript
randomRange();                      //=> <random> 0 -> Number.MAX_SAFE_INTEGER
randomRange({ min: -10, max: 50 }); //=> <random> -10 -> 50
randomRange({ max: 50 });           //=> <random> 0 -> 50
randomRange({ min: 50 });           //=> <random> 50 -> Number.MAX_SAFE_INTEGER
```

- toInteger: parse string to integer (radix 10)

```javascript
import { toInteger } from '@frontendmonster/utils';
toInteger('100'); //=> 100
toInteger('1.42'); //=> 1.42
```

- isInRange: Checks if num is between min and max (and including borders).

```javascript
import { isInRange } from '@frontendmonster/utils';
isInRange(100, [0, 50]); //=> false
isInRange(100, [0, 100]); //=> true
isInRange(100, [50, 150]); //=> true
isInRange(100, [100, 150]); //=> true
```

## Env

- get: give NODE_ENV value or given fallback value

```javascript
// $ NODE_ENV=foo node
import env from '@frontendmonster/utils';
env.get(); //=> 'foo'
env.get('fallback'); //=> 'foo'

// $ node
import env from '@frontendmonster/utils';
env.get(); //=> 'development'
env.get(undefined); //=> undefined
env.get(null); //=> null
env.get('anything'); //=> 'anything'
```

- is: strict check NODE_ENV with given value

```javascript
// NODE_ENV=proudction node
import env from '@frontendmonster/utils';
env.is('development'); //=> false
env.is('production'); //=> true
```

- match: check NODE_ENV starts with given value (case insensitive)

```javascript
// NODE_ENV=proudction node
import env from '@frontendmonster/utils';
env.match('prod'); //=> true
env.match('production'); //=> true
env.match('duction'); //=> false
env.match('development'); //=> false
```

- isDev: check env matches 'development'

```javascript
// NODE_ENV=development node
import env from '@frontendmonster/utils';
env.isDev(); //=> true
```

- isProd: check env matches 'production'

```javascript
// NODE_ENV=production node
import env from '@frontendmonster/utils';
env.isProd(); //=> true
```

- isTest: check env matches 'test'

```javascript
// NODE_ENV=test node
import env from '@frontendmonster/utils';
env.isTest(); //=> true
```
