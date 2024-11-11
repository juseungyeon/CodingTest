function solution(number, limit, power) {
    return Array(number).fill(1).map((_,index) => {
        let count = 0;
        for(let i = 1; i <= Math.sqrt(index + 1); i++) {
            if((index + 1) % i === 0) {
                if(i === (index + 1)/i) count++;
                else count += 2;
            }
        }
        return count;
    }).reduce((acc,curr) => acc + (curr > limit ? power : curr), 0);
}