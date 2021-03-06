/**
 * https://leetcode.com/problems/two-sum/description/
 * Difficulty:Easy
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

  for (let i = 0; i < numbers.length -1; i++){
      for (let j = i + 1;j < numbers.length; j++){
        if (numbers[i] + numbers[j] === target)
        return [ i , j]
      }
  }
};

console.log(twoSum([2, 11, 15, 7], 9));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 26));
console.log(twoSum([2, 7, 11, 15], 26));

