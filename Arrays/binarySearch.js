// 704

// const binarySearch = (nums, target) => {

//     let start = 0
//     let end = nums.length - 1
    

//     while(start <= end) {
//         let middle = Math.floor((start + end) / 2)

//         if(nums[middle] === target) {
//             return middle
//         } else if(nums[middle] < target) {
//             start = middle + 1
//         } else if(nums[middle] > target) {
//             end = middle - 1
//         }

//     }
//     return -1
// }


function binarySearch(sortedArray, target) {

  let left = 0;
  let right = sortedArray.length - 1;

  target = target.toLowerCase();

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = sortedArray[mid].toLowerCase();
console.log(midValue, 'midValue');

    if (midValue === target) {
      return mid; // found
    }

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // not found
}

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "John",
  "Mike",
  "Sarah",
  "Zoe"
];

console.log(binarySearch(names, "John"))
// console.log(binarySearch([-1,0,3,5,9,12], 9))
// console.log(binarySearch([-1,0,3,5,9,12], 2))