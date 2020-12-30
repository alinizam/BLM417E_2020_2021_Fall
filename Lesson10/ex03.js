function f(){
    return "HEllo";
}
console.log(f());

//function expression
var f1var=function f1(){
    return "Hello1";
}
console.log(f1var());

//function expression
var f2var=function (){
    return "Hello2";
}
console.log(f2var());

//self invoking function

(function (){
    console.log("Hello3");
})();
