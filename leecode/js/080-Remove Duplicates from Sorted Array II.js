/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length;
  var index = 0;
  var last = NaN;
  var times = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] === last) {
      if (times < 2) times++;
      else continue;
    } else {
      times = 1;
    }
    last = nums[i];
    nums[index] = nums[i];
    index++;
  }
  return index;
};