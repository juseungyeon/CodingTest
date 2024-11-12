function solution(n, words) {
    const isValidWord = (prev, curr) => {
        return prev[prev.length - 1] === curr[0];
    };
    
    let usedWords = [words[0]];
    
    for(let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const prevWord = usedWords[usedWords.length - 1];

        if(usedWords.includes(currentWord) || !isValidWord(prevWord, currentWord)) {
            const personNumber = (i % n) + 1;
            const turnNumber = Math.ceil((i + 1) / n);
            return [personNumber, turnNumber];
        }

        usedWords.push(currentWord);
    }

    return [0, 0];
}