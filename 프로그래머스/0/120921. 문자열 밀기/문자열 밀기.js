function solution(A, B) {
    let answer = 0;
    
    if(A === B) return 0;
    for(let i=0; i<A.length; i++){
        A = A.slice(-1) + A.slice(0,-1);
        answer +=1;
        if(A === B) return answer;
    }
    return -1;
}