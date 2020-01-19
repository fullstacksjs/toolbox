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
