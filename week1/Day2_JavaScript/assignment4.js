let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(numberArray) {
  return numberArray.filter((number) => (number % 2 === 0 ? true : false));
}

console.log(`These are even numbers : ${getEvenNumbers(numberArray)}`);
