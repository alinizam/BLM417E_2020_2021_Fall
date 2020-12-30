// using this function create promise that return parsed data or error.

//producer
let readData = new Promise(function (resolve, reject) {
    console.log("read data from rest services");
    resolve(JSON.parse('{"id":10"}'));
});


readData.then(function (dataParam) { 
                console.log(dataParam) 
            }).catch(function (errorParam) { 
                console.log("Error");
                console.log(errorParam) }
            );

