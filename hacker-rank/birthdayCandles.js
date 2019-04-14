//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
    let max = -1;
    for (let i = 0; i < ar.length; i++){
        if(ar[i]> max){
            max = ar[i];
        }
    }
    let count = 0;
    for (let i = 0; i < ar.length; i++){
        if(ar[i] === max){
            count += 1;
        }
    }
    return count;
}
console.log(birthdayCakeCandles([18,90,90,13,90,75,90,8,90,43]));