function solution(before, after) {
    const b = before.split('').sort();
    const a = after.split('').sort();
    return b.join('') === a.join('') ? 1 : 0;
}