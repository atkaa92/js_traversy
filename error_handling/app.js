const user = {name : 'Karen'};
try {
  // myFunction()
  // null.prop
  // eval('Hello World')
  // decodeURIComponent('%')
  if (!user.email) {
    // throw 'No email...'
    throw new SyntaxError('No email...')
  }
} catch (e) {
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
}finally{
  console.log('Finally...');
}
 
console.log('Go on...');
