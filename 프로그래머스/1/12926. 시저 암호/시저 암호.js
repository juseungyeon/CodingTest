function solution(s, n) {
    const chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY"
    return s.split('').map(e => e === " " ? " " : chars[chars.indexOf(e) + n]).join('');
}