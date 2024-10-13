function solution(absolutes, signs) {
    return absolutes.reduce((sum, value, index) => 
        signs[index] ? sum + value : sum - value
    , 0);
}