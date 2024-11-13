function solution(n, arr1, arr2) {
    return Array(n).fill().map((_, i) => {
        let result = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        return result.replace(/1/g, '#').replace(/0/g, ' ');
   });
}