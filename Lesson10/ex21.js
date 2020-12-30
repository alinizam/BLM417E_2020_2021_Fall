function birim(birimAdi){
    return function (calisan){
        return birimAdi+" "+calisan;
    }
}

var it = birim("information technology");
var hr = birim("human resource");

console.log(it("Ahmet"));
console.log(it("Mehmet"));

console.log(hr("Ayşe"));
console.log(hr("Fatma"));



