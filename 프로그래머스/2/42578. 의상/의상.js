function solution(clothes) {
    let clothMap = new Map();
    let combinations = 1;

    for (let [name, type] of clothes) {
        clothMap.set(type, (clothMap.get(type) || 0) + 1);
    }
    
    for (let count of clothMap.values()) {
        combinations *= (count + 1); 
    }
    
    return combinations - 1;
}