var isIsomorphic = function(s, t) {
  // 使用map來記錄s,t的對應關係
  var mapS = {};
  var mapT = {};

  for(var i in s){
      var valueS = s[i];
      var valueT = t[i];

      // 如果這個字元還沒出現過，加到mapS中
      if(!mapS[valueS]){
          mapS[valueS] = valueT;
      } else if(mapS[valueS] != valueT) { 
          // 如果s字元出現過，比對t的字元使否與mapS中儲存的一樣
          return false;
      }

      if(!mapT[valueT]){
          mapT[valueT] = valueS;
      } else if(mapT[valueT] != valueS) { 
          return false;
      }
  }
  // 全部比對成功
  return true;
};