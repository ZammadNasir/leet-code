// 1769

const secondHighest = (s) => {

    let numsOnly = []
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(!isNaN(element)) {
            numsOnly.push(Number(element))
        }
    }

    let uniqueArr = [...new Set(numsOnly)]
    uniqueArr.sort((a, b) => b - a);
     return uniqueArr.length >= 2 ? uniqueArr[1] : -1;
}

console.log(secondHighest('dfa12321afd'))
console.log(secondHighest('aaa111'))