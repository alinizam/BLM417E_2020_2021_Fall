let ObjectMaker = function f(){
    this.prop1="prop1Value"
};

let newObject = new ObjectMaker();
console.log(newObject.prop1);

ObjectMaker.prototype.prop2="prop2Value";
console.log(newObject.prop2);

let novelObject = new ObjectMaker();
console.log(novelObject.prop2);
// Hatalı kod
novelObject.prototype.prop3="Prop3";
console.log(novelObject.prop3);




