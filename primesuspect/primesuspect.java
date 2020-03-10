package primesuspect;

import java.io.Console;

public class primesuspect {
   public static void main(String[] args) {
      Console console = System.console();

      // get input from user
      System.out.println("Enter a prime suspect");
      Integer input = Integer.parseInt(console.readLine());

      //pass the input to the function
      System.out.println(primeNumber(input));
   }

   public static boolean primeNumber(int input) {
         for(int i=2; i<input; i++){
            // if modulo i is 0 then the number is a multiple, return false
            if(input%i == 0){
               return false;
            }
         }
         //if the above condition fails and the input is not 1 then function returns (true) that the input is a prime suspect.
         return input > 1;
   }
}