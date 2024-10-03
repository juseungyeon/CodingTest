function solution(x, n) {
    return Array(n).fill(x).map((e,index) => e*(index+1));
}