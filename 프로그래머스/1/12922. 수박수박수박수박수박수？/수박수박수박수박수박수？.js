function solution(n) {
    return Array
        .from({ length: n }, (_, index) => index % 2 === 0 ? "수" : "박")
        .join('');
}