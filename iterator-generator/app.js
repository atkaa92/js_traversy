// Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next : () =>{
//       return nextIndex < names.length
//               ? { value : names[nextIndex++], done : false}
//               : { value : null, done : true}
//     }
//   }
// }

// const namesArr = ['Jack', 'Jill', 'John'];
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// namesArr.forEach(() => {
//   console.log(names.next().value);
// })

// Generator Example
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
function* createIds() {
  let index = 1;
  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);