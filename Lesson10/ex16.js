function bike() {
    var name = "Ninja";
    this.maker = "Kawasaki";
    console.log(this.name + " " + maker);   
}

var name="Ahmet";
var maker="Honda";
obj = new bike();
console.log(obj.maker);  
console.log(obj.name);                   
