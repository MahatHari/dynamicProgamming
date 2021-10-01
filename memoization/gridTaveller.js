// Say that you are traveller on a 2D grid. You begin in the top-left conrer and your goal is to travel to the bottom-right coner
// you may only move down or right
// in how may ways can you trave to the goal on a grid with dimensions m*n

const gridTaveller = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTaveller(m - 1, n) + gridTaveller(m, n - 1);
};

// for 1 by 1 grid
gridTaveller(1, 1); // has only 1 possible, do nothing, you are already there.
// gridTaveller(1,0) or gridTaveller(0,1) means no grid

console.log(gridTaveller(1, 1)); //1
console.log(gridTaveller(2, 3)); //3
console.log(gridTaveller(3, 2)); //3
console.log(gridTaveller(3, 3)); //6
//console.log(gridTaveller(18, 18)); //????

//memoize the gridTraveller

const memoGridTaveller = (m, n, memo = {}) => {
  // are the arguments in memo
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] =
    memoGridTaveller(m - 1, n, memo) + memoGridTaveller(m, n - 1, memo);
  return memo[key];
};

console.log(memoGridTaveller(18, 18));
