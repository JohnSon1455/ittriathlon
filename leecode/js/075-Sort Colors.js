/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var counts = [0, 0, 0];
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    counts[nums[i]]++;
  }
  for (var j = 0; j < len; j++) {
    nums[j] = j < counts[0] ? 0 : (j < counts[0] + counts[1] ? 1 : 2);
  }
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var m = 0;
  var n = 0;
  var k = nums.length;
  for (var i = 0; i < k; i++) {
    if (nums[i] === 0) {
      nums[i] = 2;
      nums[n++] = 1;
      nums[m++] = 0;
    } else if (nums[i] === 1) {
      nums[i] = 2;
      nums[n++] = 1;
    } else {
      nums[i] = 2;
    }
  }
};
//Solution 3
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var j = 0;
  var k = nums.length - 1;
  for (var i = 0; i <= k; i++) {
    if (nums[i] === 0) {
      swap(nums, i, j++);
    } else if (nums[i] === 2) {
      swap(nums, i--, k--);
    }
  }
};

var swap = function (arr, a, b) {
  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};