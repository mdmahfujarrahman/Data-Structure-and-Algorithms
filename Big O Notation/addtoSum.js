//Example of O(n)
function addToSum(n){
    let total = 0;
    for(let i=0; i<n.length; i++){
        total += i
    }
    return total;
}

// example of O(1)
function addToSum(n) {
    return n * (n+1) / 2 
}

let test1 = performance.now();
addToSum(5000000000000);
let test2 = performance.now();
console.log(`Time take ${(test2 - test1) / 1000}`)
