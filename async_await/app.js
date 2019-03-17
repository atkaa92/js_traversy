// async function myFunc() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// async function getUsers() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => console.log(data))
// }

// getUsers()

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
}

getUsers()
.then(users => console.log(users))