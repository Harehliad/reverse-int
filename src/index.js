module.exports = function reverse (nuber) {
    if (nuber < 0){
        nuber = -nuber
    }
    let revers = ''
    for(let i = nuber.toString().length ; i >= 1; i--){
        revers = revers + nuber.toString()[i-1];
        }
        return revers;
}
