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

- noop: No operation ¯\_(ツ)_/¯

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
