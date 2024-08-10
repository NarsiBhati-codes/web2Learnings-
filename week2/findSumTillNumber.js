function findSumTillNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(findSumTillNumber(100));
console.log(findSumTillNumber(1000));
console.log(findSumTillNumber(10000));
console.log(findSumTillNumber(100000));
