const fib = (n) => {
  if (n <= 2) return 1; // first two fibonacci numbers is 1
  return fib(n - 1) + fib(n - 2); // using recurssion , nth fibonacci number is the sum of two previous number
};

// checking
console.log(fib(3)); // 2
console.log(fib(5)); // 5
console.log(fib(7)); // 13
console.log(fib(10));

// Using memoization to solve dynamic programming sub problems
// using js object, keys will be arguments to fn , value will be the return value

const fibd = (n, memo = {}) => {
  if (n in memo) return memo[n]; // memorized base case
  if (n <= 2) return 1; // normal base case
  memo[n] = fibd(n - 1, memo) + fibd(n - 2, memo);
  return memo[n];
};

console.log(fibd(50));

// Now the time complexity of memoized fibonacci function is = O(2n)=> O(n) and Space complexity of O(n)
