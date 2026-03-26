// 27

const removeElement = (nums, val) => {

    let k = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        
        if(element !== val) {
           let temp = nums[k] // 2
           nums[k] = nums[i] // 2
           nums[i] = temp // 2
           k++
        } 
    }
    console.log(nums)
    return k
}

console.log(removeElement([2,3,2,3], 3)) // [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)) // [0,1,4,0,3,_,_,_]