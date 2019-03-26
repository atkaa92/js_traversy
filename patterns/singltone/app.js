const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); //true
console.log({name:'Brad'} === {name:'Brad'}); //false

// console.log(instanceA);