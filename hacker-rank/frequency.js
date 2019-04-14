function frequency(input){
    input.sort(function(a,b){
        return a - b;
    })
    let output = {};
    for(let i = 0; i < input.length; i++){
        let key = input[i];
        if(key in output){
            output[key] +=1;
        } else {
            output[key] = 1;
        }
    }
    return output;
}
console.log(frequency([1,2,3,4,5,6,7,2,2,4,5,6,7,5]));