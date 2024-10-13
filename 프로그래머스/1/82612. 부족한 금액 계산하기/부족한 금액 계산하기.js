function solution(price, money, count) {
    const totalCost = price * (count * (count + 1)) / 2;
    return money >= totalCost ? 0 : totalCost - money;
}