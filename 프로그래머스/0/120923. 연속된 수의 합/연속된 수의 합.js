function solution(num, total) {
    let result = new Array(num);
    let start = (total/num) - ((num - 1) / 2);
    for(let i = 0; i < num; i++) result[i] = start + i;
    return result;    
}