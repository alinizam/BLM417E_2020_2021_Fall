var call_back_array = []
for (let i = 0; i <= 2; i++) {
    call_back_array[i] = function () { return i * 2 }
}

console.log(call_back_array[0]());
console.log(call_back_array[1]());
console.log(call_back_array[2]());
