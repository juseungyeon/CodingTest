function solution(numbers) {
    const answer = numbers.map(e => e.toString()).sort((a, b) => (b+a)-(a+b)).join('');
    return answer == 0 ? "0" : answer;
}