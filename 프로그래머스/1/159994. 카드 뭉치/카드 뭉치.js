function solution(cards1, cards2, goal) {
    let card1Index = 0;
    let card2Index = 0;
    
    for(let word of goal){
        if (word === cards1[card1Index]) {
            card1Index++;
        } else if(word === cards2[card2Index]) {
            card2Index++;
        } else {
            return "No";
        }
    }
    
    return "Yes";
}