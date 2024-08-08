function sumToNumber(number) {
    let i = 1;
    let sum = 0;
    while(i <= number) {
        sum  = sum + i;
        i++;
    }
    return sum;
}

console.log(sumToNumber(100));