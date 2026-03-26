const minSubArrayLength = (target, nums) => {


    let sum = nums[0] 
    let arr = []
    for (let i = 1; i < nums.length; i++) {
        const element = nums[i];
        sum += nums[i] 
        console.log(sum, 'sum');
        
        if(sum >= target) {
            arr.push(i+1)
            sum = 0
        }
    }

    // console.log(arr, 'aa');
    return arr
}

console.log(minSubArrayLength(7,[2,3,1,2,4,3]))