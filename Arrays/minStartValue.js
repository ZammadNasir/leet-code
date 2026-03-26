// 1413

var minStartValue = function(nums) {
    let runningSum = 0
    let minSum = 0

    for(let i=0; i < nums.length; i++) {
        runningSum += nums[i]

        if(runningSum < minSum) {
            minSum = runningSum
        }
    }

    if(minSum >= 0) return 1

    return 1 - minSum
};

console.log(minStartValue([-3,2,-3,4,2])) // 5
console.log(minStartValue([1,2])) // 1
console.log(minStartValue([1,-2,-3])) // 5