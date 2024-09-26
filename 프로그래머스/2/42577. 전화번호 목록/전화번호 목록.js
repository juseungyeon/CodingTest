function solution(phone_book) {
    return !phone_book.sort().some((value, index, self) => self[index + 1]?.indexOf(value) === 0);
}