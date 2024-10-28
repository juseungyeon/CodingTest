function solution(s) {
    let count = [0,0];

    while(s !== "1"){
        count[1] += s.match(/0/g)?.length || 0;
        s = s.replaceAll('0','').length.toString(2)
        count[0]++
    }
    
    return count;
}