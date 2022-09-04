//example of O(n2)

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

let test1 = performance.now();
printAllPairs(500)
let test2 = performance.now();
console.log(`Time take ${(test2- test1) / 1000}`);