// 605. Can Place Flowers

// Companies
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length
/**
 * @param {number[]} f
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (f, n) {
  let p = 0;
  for (let i = 0; i < f.length; i += 2) {
    if (f[i] === 0) {
      if (i === f.length - 1 || f[i + 1] === 0) {
        p++;
      } else {
        i++;
      }
    }
  }

  return p >= n;
};
