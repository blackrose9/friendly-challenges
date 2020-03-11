package anagram;

import java.io.Console;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class anagram {
   public static void main(String[] args) {
      Console console = System.console();
      System.out.println("Enter a word get an anagram");
      String word = console.readLine();
      System.out.println(myAnagram(word));
   }

   private static List<String> myAnagram(String word) {
      // put string into list, why? so we can use Collections on it.
      List<String> splitWord = Arrays.asList(word.split(""));
      // Use Collections to shuffle letters to create an anagram of provided word.
      Collections.shuffle(splitWord);

      // convert list array to string so we can return it. (I think this is unneccesary though, just change the return type to List)
      // String anagram = Arrays.toString(splitWord.toArray());

      return splitWord;
   }
}