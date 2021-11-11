/**
 * https://leetcode.com/problems/valid-parentheses/
 * Difficulty:Easy
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * The brackets must close in the correct order,
 * "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
        var stack = [];
        var len = s.length;
        var map = {
          '(': ')',
          '[': ']',
          '{': '}'
        };
        for (var i = 0; i < len; i++) {
          if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
            stack.pop();
          } else {
            stack.push(s[i]);
          }
        }
        return stack.length === 0;
      };
console.log(isValid('()[]{}'));
console.log(isValid('[()][]{}'));
console.log(isValid('(])'));