# Utils

Common JavaScript utility functions

## Arrays

* toArray:
Convert a value to an array

```javascript
toArray(null);      //=> []
toArray(undefined); //=> []
toArray('string');  //=> ['string']
toArray(['array']); //=> ['array']
toArray(itratable); //=> [...iteratable]
toArray(others);    //=> [others]
```
