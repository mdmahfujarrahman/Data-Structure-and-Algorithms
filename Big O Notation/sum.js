//example of O(1) for space complexity
function sum (array) {
    let total = 0;//one number of variable
    // let i = 0 // another one of variable spae taken 
    // they ar consistant if array length incrace it will be same
    for (let i = 0 ;  i < array.length; i++) {
        total += array[i];
    }
    return total;

}

// example of O(n)
// because we know the rules if variable is array an object there we can count length
// here we see there i declear a variable with array
function double (array) {
    let newArray = [];
    for (let i = 0 ; i < array.length; i++) {
        newArray.push(5 * array[i]);
    }
    return newArray;
}

