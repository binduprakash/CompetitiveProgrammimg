function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++){
        sum += ar[i];
    } 
    return sum;
}


console.log(simpleArraySum([2,3,1]));