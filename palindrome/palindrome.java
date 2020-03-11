package palindrome;

import java.io.Console;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class palindrome {
   public static void main(String[] args) {
      Console myConsole = System.console();
      
      // get input from user
      System.out.println("Enter a palindrome");
      String possiblePalindrome = myConsole.readLine();

      //pass the input to the function
      System.out.println(isPalindrome(possiblePalindrome));
   }
   
   public static boolean isPalindrome (String word){
      // split word into chracters
      char[] splitWord = word.toCharArray();

      List<Character> listWord = new ArrayList<>();
      List<Character> reversedListWord = new ArrayList<>();

      // add characters into two lists
      for (char c: splitWord){
         listWord.add(c);
         reversedListWord.add(c);
      }
      // use Collections library to reverse one list
      Collections.reverse(reversedListWord);

      // check if both lists are equal. "true or false"
      boolean isPalindrome = listWord.equals(reversedListWord);

      // String joinedWord = Arrays.toString(reversedListWord.toArray());
      return isPalindrome;
   }
}