decompose = (num) => {
   let x = num-1;
   let numPowr = Math.pow(num, 2);
   let sequence = [];
   let squaredSum = 0;
   for(x; x > 0; x--){
      let powr = Math.pow(x, 2);
      console.log(powr);
      if(squaredSum+powr <= numPowr){
         squaredSum+=powr;
         sequence.push(Math.sqrt(powr));
         // console.log(sequence);
      }
   }
   sequence = sequence.reverse();
   return (sequence.length == 1) ? null : sequence;
   // loop through all the possible sequences
   // find the longest sequence and return that one.
}
console.log(decompose(11));