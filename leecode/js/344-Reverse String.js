var reverseString = function(s) {
    let lens = s.length
    for(let i = lens - 1; i >= 0 ; i--){
        s.push(s[i])
    }
   return s.splice(0,lens)
 };