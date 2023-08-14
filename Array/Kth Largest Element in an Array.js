// 215. Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
// Constraints:
// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // let max = 0;
  // for(let i = 0; i<k ; i++)
  // {
  //     for(let j=i+1; j<nums.length; j++)
  //     {
  //         if(nums[i]<nums[j])
  //         {
  //             max = nums[i];
  //             nums[i] = nums[j];
  //             nums[j] = max;
  //         }
  //     }
  // }
  // return nums[k-1];
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
