function solution(n) {
    const countOnes = num => num.toString(2).match(/1/g)?.length || 0;
    const nOneCount = countOnes(n);
    
    let result = n + 1;
    while(countOnes(result) !== nOneCount) {
        result++;
    }
    
    return result;
}