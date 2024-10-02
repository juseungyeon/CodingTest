function solution(s){
    const lowerCaseString = s.toLowerCase();
    const pCount = [...lowerCaseString].filter(e => e === 'p').length;
    const yCount = [...lowerCaseString].filter(e => e === 'y').length;

    return pCount === yCount;
}