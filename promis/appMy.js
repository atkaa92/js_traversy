//Callback
// let val = 'Default value';

// function changeVal(callback) {
//   setTimeout(function() {
//     val = 'Cganged value'; 
//     callback();
//   }, 1000)
// }

// function logVal() {
//   setTimeout(function() {
//     console.log(val);
//   }, 500)
// }

// changeVal(logVal);

//Promis
let val = 'Default value';
function changeVal() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      val = 'Cganged value'; 
      var testReject = true;
      if (!testReject) {
        reject('Error rejected');
      }else{
        resolve('ASA')
      }
    }, 1000)
  })
}

function logVal(asa) {
  setTimeout(function() {
    console.log(val + ' plus variable ' + asa);
  }, 500)
}

changeVal()
.then(logVal)
.catch(function(err) {
  console.log(err);
})