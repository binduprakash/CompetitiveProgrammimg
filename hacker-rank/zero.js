function zeroAtEnd(arr){
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === 0){
            arr.splice(i,1);
            arr.push(0);
        }
    }
    return arr;
}
console.log(zeroAtEnd([0, 0, 4, 0, 3, 6]));