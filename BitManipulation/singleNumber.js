// 136

const singleNumber = (nums) => {
 let total=0;

    for (let i = 0; i < nums.length; i++) {
        
        total = total^nums[i]
    
}

return total
}

console.log(singleNumber([4,1,2,1,2]))