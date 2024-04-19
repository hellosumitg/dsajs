// Leet Code: 1. Two Sum
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Brute Force Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function twoSum1(nums, target) {
  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Nested loop to find the complement of current element
    // by scanning through the rest of the array
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of current element and next element equals target
      if (nums[i] + nums[j] === target) {
        // Return indices of the two numbers that add up to target
        return [i, j];
      }
    }
  }
  // If no such pair found, return an empty array
  return [];
}

// Example usage:
console.log(twoSum1([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum1([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum1([3, 3], 6)); // Output: [0, 1]
console.log('-----------------------------------------------');
// Hash Map Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function twoSum2(nums, target) {
  // Create a map to store each element of the array along with its index such as
  // {
  //   num0: itsIndex
  //   num1: itsIndex
  // }

  const numMap = new Map();
  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current element needed to reach the target
    const complement = target - nums[i];
    // Check if the complement exists in the map
    if (numMap.has(complement)) {
      // If complement found, return the indices of the current element and its complement
      return [numMap.get(complement), i];
    }
    // If complement not found, store the current element in the map along with its index
    numMap.set(nums[i], i);
  }
  // If no such pair found, return an empty array
  return [];
}

// Example usage:
console.log(twoSum2([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum2([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum2([3, 3], 6)); // Output: [0, 1]
