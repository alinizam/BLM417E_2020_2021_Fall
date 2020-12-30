var modul = (function (){
    function publicF(aciklama){
        return "İstanbul"+" "+aciklama;
    };
    function privateF(){
        return "Fatih";
    };
    return {publicFunc:publicF}
})();

console.log(modul.publicFunc("is one of the wonderfull city in the world."));