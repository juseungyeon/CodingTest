function solution(keyinput, board) {
    let answer = [0,0];
    const board_max = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    keyinput.forEach(e => {
        switch(e){
            case "up":
                if(answer[1] < board_max[1]) answer[1] += 1
                break;
            case "down":
                if(answer[1] > -board_max[1]) answer[1] -= 1 
                break;
            case "left":
                if(answer[0] > -board_max[0]) answer[0] -= 1 
                break;
            case "right":
                if(answer[0] < board_max[0]) answer[0] += 1 
                break;
                
        }  
    })
    return answer;
}