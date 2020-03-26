package pangram;

class pangram{
   public static void main(String[] args) {
      System.out.println(isPangram("The quick brown fox jumps over the lazy dog"));
   }

   public static boolean isPangram(String sentence){
      String[] alphabet = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
      sentence=sentence.toLowerCase();
         for(String letter : alphabet) {
            if(!(sentence.contains(letter))){
               return false;
            }
         }
         return true;
   }
}