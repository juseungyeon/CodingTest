function solution(x, n) {
    return new Array(n).fill(x).map((e,index) => e*(index+1));
}