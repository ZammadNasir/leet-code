// const secondHighest = (s) => {
//     let numsOnly = []
//     for (let i = 0; i < s.length; i++) {
//         const element = s[i];
//         if(!isNaN(element)) {
//             numsOnly.push(Number(element))
//         }
//     }

//     numsOnly.sort((a, b) => b - a)
//     let set = new Set(numsOnly)

//     return set.size > 1 ? numsOnly[1] : -1
// }

var secondHighest = function(s) {
    let max = -1;
    let secondMax = -1;

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            const num = char - '0';

            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num < max && num > secondMax) {
                secondMax = num;
            }
        }
    }

    return secondMax;
};

console.log(secondHighest('dfa12321afd'))
console.log(secondHighest('abc1111'))
console.log(secondHighest('221'))