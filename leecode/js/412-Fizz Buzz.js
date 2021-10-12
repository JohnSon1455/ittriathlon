var fizzBuzz = function(n) {
  let ary = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      ary.push('FizzBuzz');
    } else if (i % 5 === 0) {
      ary.push('Buzz');
    } else if (i % 3 === 0) {
      ary.push('Fizz');
    } else {
      ary.push(i + '');
    }
  }
  return ary;
};