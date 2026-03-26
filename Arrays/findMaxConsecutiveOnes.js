// 485

const findMaxConsecutiveOnes = (nums) => {
 let res = 0, cur = 0;
    for (let n of nums) {
        if (n === 1) {
            cur++;
            res = Math.max(res, cur);
        } else {
            cur = 0;
        }
    }
    return res;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1,2,2,2]))