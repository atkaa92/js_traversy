const http = new EasyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });

// Get single Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

//Add new post
const data = {
  title : 'New Post',
  body : 'New post body'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if (err) {
    console.log(err);
  }else{
    console.log(post);
  }
});

//Update post
// const data = {
//   title : 'New Post update',
//   body : 'New post body update'
// }

// http.put('https://jsonplaceholder.typicode.com/posts/12', data, function(err, post){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

//Delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/15', function(err, posts){
//   if (err) {
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });