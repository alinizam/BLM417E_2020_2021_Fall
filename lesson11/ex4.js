//producer
let readData = new Promise(function(resolve, reject){
    console.log("read data from rest services");
    //resolve("data");
    reject("error");
});

//consume
/*readData.then(function(dataParam){console.log(dataParam)},
         function(errorParam){console.log(errorParam)});*/

//Error handling         
readData.then(function(dataParam){console.log(dataParam)}).
         catch(function(errorParam){console.log(errorParam)});

