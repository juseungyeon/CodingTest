function solution(food) {
    const half = food.map(e => Math.floor(e/2)).reduce((str,curr,index) =>
        curr ? str + `${index}`.repeat(curr) : str
    ,'');
    
    return half + "0" + [...half].reverse().join('');
}