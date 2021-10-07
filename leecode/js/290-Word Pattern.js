var wordPattern = function(pattern, str) {
  var patternMap = {};
  var strMap = {};
  var ary = str.split(/\s/)

  // 樣版的長度跟字串中單詞的數量對不起來 false
  if(pattern.length != str.split(/\s/).length){
      return false;
  }

  for(var i in pattern){
      var p = pattern[i];
      var s = ary[i];
      // 沒出現過的配對加入map，出現過就進行比對
      if(!patternMap[p]){
          patternMap[p] = s;
      } else if(patternMap[p] != s){
          return false;
      }

      if(!strMap[s]){
          strMap[s] = p;
      }  else if(strMap[s] != p) {
          return false;
      }

  }

  return true;
};