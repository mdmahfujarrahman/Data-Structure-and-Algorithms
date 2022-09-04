function addToSum(n){
    let total = 0;
    for(let i=0; i<n.length; i++){
        total += i
    }
    return total;
}

let test1 = performance.now();
addToSum(550);
let test2 = performance.now();
console.log(`Time take ${(test2 - test1) / 1000}`)
