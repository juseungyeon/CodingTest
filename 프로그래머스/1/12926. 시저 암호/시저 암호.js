function solution(s, n) {
    return s
        .split('')
        .map(char => {
            if (char === ' ') return ' '; 
            const charCode = char.charCodeAt(0);

            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode((charCode - 97 + n) % 26 + 97);
            } else if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode((charCode - 65 + n) % 26 + 65); 
            }
        })
        .join('')
}