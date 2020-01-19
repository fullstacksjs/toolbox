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

## Numbers

- randomInt: generate random integer number between range.

```javascript
randomRange();                      //=> <random> 0 -> Number.MAX_SAFE_INTEGER
randomRange({ min: -10, max: 50 }); //=> <random> -10 -> 50
randomRange({ max: 50 });           //=> <random> 0 -> 50
randomRange({ min: 50 });           //=> <random> 50 -> Number.MAX_SAFE_INTEGER
```
