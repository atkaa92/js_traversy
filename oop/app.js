// ------------------------------------------------------- 45 ----------------------------------------------------
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
// }

// Person.prototype.calculateAge = function(){
//   const diff =  Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.setLastname = function (newLastname) {
//   this.lastName = newLastname;
// }
// var karen = new Person('Karen', 'Margaryan', '1-30-92')
// console.log(karen.calculateAge());
// console.log(karen.getFullName());
// karen.setLastname('Margarian');
// console.log(karen.getFullName());
// console.log(karen.hasOwnProperty('lastName')); // function from Object prototype


// ------------------------------------------------------- 46 ----------------------------------------------------
// function Person(firstName) {
//   this.firstName = firstName;
// }

// Person.prototype.sayHello = function () {
//   return `Hello ${this.firstName}`;
// }

// var karen = new Person('Karen')
// console.log(karen.sayHello());

// function Customer(firstName, phone) {
//   Person.call(this, firstName);
//   this.phone = phone;
// }
// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.constructor = Customer;

// var arthur = new Customer('Arthur', '095');
// console.log(arthur);
// console.log(arthur.sayHello());

// Customer.prototype.sayHello = function () {
//   return `Hello ${this.firstName} again`;
// }
// console.log(arthur.sayHello());


// ------------------------------------------------------- 47 ----------------------------------------------------
// var personPrototypes = {
//   sayHello : function () {
//     return `Hello ${this.firstname}`;
//   }
// }

// var karen = Object.create(personPrototypes)
// karen.firstname = 'Karen';
// console.log(karen);
// console.log(karen.sayHello());

// var arthur = Object.create(personPrototypes, {
//   firstname : {value : 'Arthur'}
// });
// console.log(arthur);
// console.log(arthur.sayHello());


// ------------------------------------------------------- 48 ----------------------------------------------------
// class Person {
//   constructor(firstname){
//     this.firstname = firstname;
//   }

//   sayHelloOwn = function () {
//     return `Own hello ${this.firstname}`;
//   } // for class directly

//   sayHello()  {
//     return `Hello ${this.firstname}`;
//   }  // for class prototype

//   static calculateNumOwn = function(x, y){
//     return x - y;
//   } // constructor: class Person

//   static calculateNum(x, y){
//     return x + y;
//   } // non shown 
// }

// var karen = new Person('Karen')
// console.log(karen);
// console.log(karen.sayHelloOwn());
// console.log(karen.sayHello());
// console.log(Person.calculateNumOwn(4, 8));
// console.log(Person.calculateNum(4, 8));


// ------------------------------------------------------- 49 ----------------------------------------------------
class Person {
  constructor(firstname){
    this.firstname = firstname;
  }

  sayHello()  {
    return `Hello ${this.firstname}`;
  }
}

class Customer extends Person {
  constructor(firstname, phone){
    super(firstname);
    this.phone = phone;
  }
}

var arthur = new Customer('Arthur', '095');
console.log(arthur);
console.log(arthur.sayHello());

