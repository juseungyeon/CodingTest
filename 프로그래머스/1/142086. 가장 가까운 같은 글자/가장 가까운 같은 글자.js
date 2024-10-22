function solution(s) {
    let answer = [];
    let lastIndex = {}; 
    
    [...s].forEach((char, index) => {
        if (lastIndex[char] === undefined) {
            answer.push(-1);
        } else {
            answer.push(index - lastIndex[char]);
        }
        lastIndex[char] = index;
    });
    
    return answer;
}