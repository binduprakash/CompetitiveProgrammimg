function sockMerchant(n, ar) {
    let pair = {};
    for (let i = 0; i < n; i++){
        let key = ar[i];
        if(key in pair){
            pair[key] += 1;
        } else {
            pair[key] = 1; // initialization
        }
    }
    let totalPairs = 0;
    for (let key in pair){
        if(pair[key] > 1){
            if(pair[key] % 2 === 1){
                pair[key] -= 1;
            }
            totalPairs += pair[key] / 2;
        }
    }
    return totalPairs;
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]));