/* Thought process
loop through all the possible sequences
find the longest sequence and return that one.
100 81 64 49 36 25 16 9 4 1
[10 4 2 1]
.....
continue the sequence see where it ends with this power, and if it doesn't give us the correct output then we jump this power.
sequence.push(Math.sqrt(powr));
squaredSum+=powr; =81
.....
if 2401 + 81 is equal to a number that does not reach 2500 if we add the rest of the powers......................
if 2500 - 2482 is not equal to summation of rest of the possible powers
*/


decompose = (num) => {
   
   // for(let i=0; i<num.length;i++){ // 0 -> 10
      
   // }
   
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
            //go through the rest of the numbers, if the end solution is not num^2 then skip this number
         } while(powr){

         } 
         
      }
   }

   if(squaredSum!==numPowr){
      //loop again starting from the next number e.g. 48 -> 47 -> etc
   } else {
      sequence = sequence.reverse();
      return (sequence.length == 1) ? null : sequence;
   }
}
 
console.log(findSequence(10));

/**
 * this solution does not include a check for if a sequence is not possible

   decompose = (n) => {
   let finalSequence = decomposer(n, n*n)
   return finalSequence.slice(0, finalSequence.length - 1)
}

function decomposer(trackingNumber, remainder) {
  
   if (remainder == 0) {
      return [trackingNumber]
   } 
   for (let i = trackingNumber - 1; i > 0; i--) {
      
      if (remainder - Math.pow(i, 2) >= 0) {
         
         let result = decomposer(i, (remainder - i * i)) 
         if (result != null) {
            result.push(trackingNumber)
            return result
         }
      }
   }
   return null
}
 
console.log(decompose(50))
 */
/*
   decompose = (num) => {
      return loop(num-1, num*num, []);
      function loop(atNum, remainder, sequence){
      return(remainder === 0) ? sequence : (remainder < 0 || atNum === 0) ? null : loop(atNum - 1, remainder - atNum*atNum, [atNum].concat(sequence)) || loop(atNum-1, remainder, sequence);  }
   }
 */