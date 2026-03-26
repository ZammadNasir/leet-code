// 283

const moveZeroes = (nums) => {

    if(nums.length === 0) return nums

    let k = 0

    for (let i = 0; i < nums.length; i++) {

        if(nums[i] !== 0) {
            let temp = nums[k]
            nums[k] = nums[i]
            nums[i] = temp
            k++
        }
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,1,0,3,12,54,0,0,23,0,0,0,7]))
console.log(moveZeroes([0]))