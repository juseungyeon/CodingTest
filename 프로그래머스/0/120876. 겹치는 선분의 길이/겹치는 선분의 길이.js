function solution(lines) {
    const start = Math.min(...lines.flat())
    const end = Math.max(...lines.flat())
    let line = new Array(end-start).fill(0)
    
    lines.forEach(([a, b]) => {
        for(; a < b; a++) {
            line[a - start]++
        }
    })
    
    return line.reduce((a,c) => c > 1 ? a + 1 : a, 0);
}