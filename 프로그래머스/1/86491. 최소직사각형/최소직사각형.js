function solution(sizes) {
    let maxWidth = 0; 
    let maxHeight = 0;

    sizes.forEach(([width, height]) => {
        const longer = Math.max(width, height);
        const shorter = Math.min(width, height);
        
        maxWidth = Math.max(longer, maxWidth);
        maxHeight = Math.max(shorter, maxHeight); 
    });

    return maxWidth * maxHeight;
}