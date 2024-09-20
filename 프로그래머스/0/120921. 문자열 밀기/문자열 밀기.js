function solution(A, B) {
    let answer = 0;
    let newA = A;
    
    if(A === B) return 0;
    for(let i=0; i<A.length; i++){
        newA = newA.at(A.length-1) + newA.slice(0,-1);
        answer +=1;
        if(newA === B) return answer;
    }
    if(answer === A.length) return -1;
}