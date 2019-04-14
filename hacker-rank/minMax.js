//https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    arr.sort(function(a,b){
        return a - b ;
    });
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length - 1; i++){
        minSum += arr[i];
    }
    for (let i = 1; i < arr.length; i++){
        maxSum += arr[i];
    }
    return console.log(minSum , maxSum);
    
}
console.log(miniMaxSum([1,2,3,4,5]));