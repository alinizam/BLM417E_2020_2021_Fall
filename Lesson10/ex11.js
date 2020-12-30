var sayHello; 
if (true) {   sayHello = function() { 
                  return 'trueHello';   
  } 
} 
else {   
   sayHello = function() {     
   return 'false Hello';   
}; 
} 
console.log(sayHello());

