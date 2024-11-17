function solution(k, tangerine) {
    const counts = tangerine.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    const sortedCounts = Object.values(counts).sort((a,b) => b-a);

    let sum = 0;
    let types = 0;

    for(let count of sortedCounts) {
        sum += count;
        types++;
        if(sum >= k) break;
    }

    return types;
}