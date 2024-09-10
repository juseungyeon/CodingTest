function solution(a, b) {
    // 두 수의 최대공약수를 구하는 함수
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    // 분수의 약분을 위해 a와 b의 최대공약수로 나누기
    let commonDivisor = gcd(a, b);
    b /= commonDivisor;
    
    // b에서 2를 계속 나누기
    while (b % 2 === 0) b /= 2;
    // b에서 5를 계속 나누기
    while (b % 5 === 0) b /= 5;
    
    // 만약 모든 2와 5를 제거한 후 b가 1이 되면 유한소수 (1을 반환), 그렇지 않으면 무한소수 (2를 반환)
    return b === 1 ? 1 : 2;
}