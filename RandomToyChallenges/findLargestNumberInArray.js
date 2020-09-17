(getMax = (arr) => {
   let max = -Infinity;
   arr.forEach(number => {
      max = Math.max(max, number);
   });
   console.log(max)
   return max;
})([7,1,5,9]);
//function that calls itself


