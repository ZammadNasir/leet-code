const twoSum = (nums,target) => {

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        const element = target - nums[i];
        
        if(map.hasOwnProperty(element)) {
            return [map[element], i]
        }

        map[nums[i]] = i
    }

}

console.log(twoSum([2,7,11,15], 9))