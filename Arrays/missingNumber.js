// 268

const missingNumber = (nums) => {
    const n = nums.length;
  const expectedSum = n * (n + 1) / 2;

  let actualSum = 0;
  for (let num of nums) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))