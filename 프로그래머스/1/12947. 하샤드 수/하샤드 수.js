function solution(x) {
    const sumOfDigits = x.toString().split('').reduce((accu, digit) => accu + +digit, 0);
    return x % sumOfDigits === 0;
}