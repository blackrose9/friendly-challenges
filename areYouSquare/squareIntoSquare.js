decompose = (num) => {
   
   // for(let i=0; i<num.length;i++){ // 0 -> 10
      
   // }
   // loop through all the possible sequences
   // find the longest sequence and return that one.
   // 100 81 64 49 36 25 16 9 4 1
   // [10 4 2 1]
}

findPower = (makeMePower) => {
   let power = Math.pow(makeMePower, 2); 
      return power;
}

findSequence = (num) => {
   let x = num-1;
   let numPowr = findPower(num); //121
   let sequence = [];
   let squaredSum = 0;

   for(x; x > 0; x--){ //x=9
      let powr = findPower(x); //81
      //      0+81         <=   100
      if(squaredSum+powr <= numPowr){
         do{
            
         } while(powr){

         } 
         //continue the sequence see where it ends with this power, and if it doesn't give us the correct output then we jump this power.
         // sequence.push(Math.sqrt(powr));
         // squaredSum+=powr; =81
      }
   }
   /*
   if 2401 + 81 is equal to a number that does not reach 2500 if we add the rest of the powers......................
   if 2500 - 2482 is not equal to summation of rest of the possible powers
   */
   if(squaredSum!==numPowr){
      
   }

   sequence = sequence.reverse();
   return (sequence.length == 1) ? null : sequence;
}
console.log(findSequence(10));