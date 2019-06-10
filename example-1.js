/*
#### Задача 1

Добавить неперечислимый метод `isArray()`в `Object.prototype`. Основная задача этого метода возвращать `true` если он вызван у массива и `false`, если не у массива.

Условия:
+ Встроенный Array.prototype.isArray нужно удалить.

```javascript
console.log(typeof Array.isArray) // undefined
const person = {};
const customers = [];
const typedArray = new Int8Array([1, 2, 3]);

person.isArray();     // false
customers.isArray();  // true
typedArray.isArray(); // false
```
 */
delete Array.isArray;

Object.defineProperty(Object.prototype, 'isArray', {
  value() {
    return this.constructor === Array;
  },
  enumerable: false,
  configurable: false,
});


console.log(typeof Array.isArray) // undefined

const person = {};
const customers = [];
const typedArray = new Int8Array([1, 2, 3]);

console.log( person.isArray() );     // false
console.log( customers.isArray() );  // true
console.log( typedArray.isArray() ); // false
