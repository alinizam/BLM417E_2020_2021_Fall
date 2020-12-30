function f1(){
    return 3+2;
}

(function f2(f1pointer){
    console.log(f1pointer());
})(f1);
