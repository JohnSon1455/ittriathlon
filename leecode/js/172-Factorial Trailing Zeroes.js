var trailingZeroes = function(n) {
    if(n < 5) return 0 ;

    var count = 0;
    // 算階層內有幾個5出現
    while(n >= 5){
        count += Math.floor(n/5);
        n = parseInt(n/5);
    }

    return count;
};