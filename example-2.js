/*
#### Задача 2

Добавить неперечислимый метод `isArrayTyped()`в `Object.prototype`.
Основная задача этого метода возвращать `true` если он вызван у типизированного массива и `false`,
если не у типизированного массива. Обычный массив – это не типизированный массив.

```javascript
const person = {};
const customers = [];
const typedArray = new Int8Array([1, 2, 3]);

person.isArrayTyped(); // false
customers.isArrayTyped(); // false
typedArray.isArrayTyped(); // true
```
 */

Object.defineProperty(Object.prototype, 'isArrayTyped', {
  value() {
    return this.buffer instanceof ArrayBuffer;
  },
  enumerable: false,
  configurable: false,
});

const person = {};
const customers = [];
const typedArray = new Int8Array([1, 2, 3]);

console.log( person.isArrayTyped() ); // false
console.log( customers.isArrayTyped() ); // false
console.log( typedArray.isArrayTyped() ); // true
