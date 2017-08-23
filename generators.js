/* Generators

# Generator function in JavaScript is a type of function that can be paused and resumed so that
other code can run in between. A generator function returns a generator object.

# Sources:
* http://thejsguy.com/2016/10/15/a-practical-introduction-to-es6-generator-functions.html
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

*/

// Basic generator
function* gen() {
  yield 1
  yield 2
  yield 3
}

let g = gen()

console.log("g is: ", g);
console.log("g.next() is: ", g.next()); // { value: 1, done: false }
console.log("g.return() is: ", g.return(2)); // { value: 2, done: true }
// g.throw(new Error('Something went wrong')); // Error: Something went wrong

// Infinite Iterator
function* idMaker() {
  let index = 0
  while(true)
    yield index++
}

let genIdMaker = idMaker()
console.log('gen.next().value is ', genIdMaker.next().value);
console.log('gen.next().value is ', genIdMaker.next().value);
console.log('gen.next().value is ', genIdMaker.next().value);
