var plusOne = function(digits) {
  // 判斷相加後是否需進位
  var carry = 0;

  for(var i = digits.length - 1 ; i >= 0 ; i--){
      // 目前位數 = 目前位數+前面是否進位
      digits[i]= digits[i] + carry;

      // list最後一個數字，也就是個位數，給他+1
      if(i == digits.length - 1 ){
        digits[i] = digits[i] + 1;
      } 

      // 如果目前這個位數等於10(因為只+1，所以不會超過10)，進位
      if(digits[i] == 10){
        digits[i] = 0;
        carry = 1;
      } else {
        carry = 0;
      }
  }

  // 最後如果有進位
  if(carry == 1){
      digits.unshift(carry); 
  }

  return digits;
};