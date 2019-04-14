//https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    let resultArray = [];
    let aCount = 0;
    let bCount = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            aCount += 1;
        }
        if (a[i] < b[i]) {
            bCount += 1;
        }
        
    }
    resultArray.push(aCount);
    resultArray.push(bCount);
    return resultArray;
}
console.log(compareTriplets([1,2,3], [3,2,1]));