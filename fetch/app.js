document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
  .then(res => res.text())
  .then(data => document.getElementById('output').innerHTML = data)
  .catch(err => console.log(err))
}

// Get local json data
function getJson() {
  fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    let output = '';
    posts.forEach((post, i) => {
      output += `
        <ul>
          <p>Post ${i+1}</p>
          <li>Title - ${post.title}</li>
          <li>Body - ${post.body}</li>
        </ul>
      `
    })
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err))
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(users => {
    let output = '';
    users.forEach((user, i) => {
      output += `
        <ul>
          <p>User ${i+1}</p>
          <li>Title - ${user.login}</li>
        </ul>
      `
    })
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err))
}