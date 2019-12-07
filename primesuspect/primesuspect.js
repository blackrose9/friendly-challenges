// declares function 'primeNumber' which takes in one parameter 'input'
function primeNumber(input) {
   //for variable i = 2, and i less than input, increment i
       for(var i = 2; i < input; i++) {
       //if input modulo i is 0 then input is a multiple
           if(input % i === 0) {
               return false;
           }
       }
      //if any of the above conditions fails and the input is not 1 then function returns that the input is a prime suspect.
      // console.log
       return input > 1;
   }
   
   //asks for user input to check for primality
   var userInput = prompt ("What is your 'prime' suspect?");
   // parses the userInput to an integer
   var input = parseInt(userInput);
   // logs the function's result.
   console.log(primeNumber(input));
   