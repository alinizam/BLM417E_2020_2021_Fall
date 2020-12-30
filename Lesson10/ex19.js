// Initiate counter
var counter = 0;
// Function to increment counter
var addVar=(function() {
  var counter = 0; 
  return function inner(){ 
    counter += 1;
    return counter;
    }
})();

// Call add() 3 times

console.log(addVar());
console.log(addVar());
console.log(addVar());
