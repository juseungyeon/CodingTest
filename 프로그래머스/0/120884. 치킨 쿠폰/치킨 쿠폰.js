const order = coupons => {
    if (coupons < 10) return 0;
    const service = Math.floor(coupons / 10);
    return service + order(service + (coupons % 10));
};

function solution(chicken) {  
    return order(chicken);
}