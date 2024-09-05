function solution(numlist, n) {
    const answer = numlist.map(e => e - n).sort((a, b) => {
        if (Math.abs(a) === Math.abs(b)) {
            return b - a;
        } else {
            return Math.abs(a) - Math.abs(b);
        }
    }).map(e => e + n);
    
    return answer;
}