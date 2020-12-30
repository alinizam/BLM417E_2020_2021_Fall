function first() {
    setTimeout(function(){
                   console.log(1);
                },10);
}
function second() {
    console.log(2);
}
first();
second();
