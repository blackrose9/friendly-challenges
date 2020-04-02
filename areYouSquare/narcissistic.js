isNarcissistic = (num) => {
   num = num.toString()
   let powers = []
   // take in number
   // split the Number
   // foreach digit of number
   // cube the number and store the result
   // add all the cube results
   // if the added result is equal to the original number return true:false

   let digitsArr = num.split("");
   digitsArr.forEach(digit => {
      let power = Math.pow(digit,3)
      powers.push(power);
   });
   powers = powers.reduce((a, b) => a + b, 0);
   return(powers==num)?true:false;
}

console.log(isNarcissistic(301));
console.log(isNarcissistic(370));

// console.log(typeof num)