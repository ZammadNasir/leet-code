// 643

const findMaxAverage = (nums, k) => {
    // Step 1: sum of first k elements
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    // Step 2: initialize max sum
    let maxSum = windowSum;

    // Step 3: slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i];        // add new element
        windowSum -= nums[i - k];    // remove old element
        maxSum = Math.max(maxSum, windowSum);
    }

    // Step 4: return maximum average
    return maxSum / k;
};

console.log(findMaxAverage([4, 2, 1, 3, 5], 3))