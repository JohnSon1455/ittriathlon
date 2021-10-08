var reverseString = function(s) {
  let restr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    let x = []
    x = restr.push(s[i]);
    }
  return restr;
};

s = ["H","a","n","n","a","h"]

console.log(reverseString(s))