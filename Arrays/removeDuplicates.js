// 26

const removeDuplicates = (nums) => {

      if (nums.length === 0) return 0; // edge case: empty array

    let k = 1; // writer pointer starts at 1 since the first element is always unique

    for (let i = 1; i < nums.length; i++) { // scanner pointer
        if (nums[i] !== nums[k - 1]) { // found a new unique element
            nums[k] = nums[i]; // write it at the k-th position
            k++; // move writer pointer forward
        }
    }

    return k; // number of unique elements
}

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))