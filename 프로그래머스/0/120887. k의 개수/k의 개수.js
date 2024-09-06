function solution(i, j, k) {
    return Array.from({ length: j - i + 1 }, (v, idx) => i + idx).join('').split('').filter(v => v === k.toString()).length;
}