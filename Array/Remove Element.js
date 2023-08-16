// 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[c++] = nums[i];
    }
  }
  return c;

  // nums =  nums.filter((m)=>{
  //    return m !== val;
  // } )

  // console.log(nums)

  // return nums
};
