//https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let zero = 0;
    let negative = 0;
    let positive = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zero += 1;
        } else 
        if(arr[i] <= -1){
            negative += 1;
        } else
        if(arr[i] >= 1){
            positive += 1;
        }
    }
    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);