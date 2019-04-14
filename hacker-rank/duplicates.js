function duplicate (array){
    array.sort(function(a,b) {
        return a - b ;
      })
    let nonDuplicate = [];
    for (let i = 0; i < array.length; i ++){
        if(array[i]!== array[i+1]){
            nonDuplicate.push(array[i])
        }
    }
    return nonDuplicate; 
}
console.log(duplicate([1,2,2,5,6,7,8,8,2,3,4,1]));