const http = new EasyHTTP();
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

const data = {
  name : 'Karen',
  username : 'atkaa92',
  email : 'test@gmail.ccom'
};

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

// http.put('https://jsonplaceholder.typicode.com/users/3', data)
// .then(data => {
//   console.log(data);
// })
// .catch(err => {
//   console.log(err);
// })

http.delete('https://jsonplaceholder.typicode.com/users/4')
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})