function solution(name, yearning, photo) {
    const names = name.reduce((accu, curr, index)=>{
        accu[curr] = yearning[index]
        return accu
    },{})

    return photo.map(e => e.reduce((sum, name) => sum + (names[name] || 0), 0));
}