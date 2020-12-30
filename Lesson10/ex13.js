function f1(){
    console.log("Hello");
}

function f2(){
    arguments[0]();
}

f2(f1);