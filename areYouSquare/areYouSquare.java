package areYouSquare;

public class areYouSquare {
   public static void main(String[] args) {
      System.out.println(isSquare(-1));
      System.out.println(isSquare(0));
      System.out.println(isSquare(30));
      System.out.println(isSquare(4));
      System.out.println(isSquare(25));
      System.out.println(isSquare(26));
   }

   private static boolean isSquare(int number) {
      double sqrt = Math.sqrt(number);
      return (sqrt*sqrt==number)? true: false;
   }
}