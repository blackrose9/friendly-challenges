import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class narcissistic {
   public static void main(String[] args) {
      System.out.println(isNarcissistic(370));
      System.out.println(isNarcissistic(301));
   }

   public static boolean isNarcissistic(int num) {
      String stringNum = String.valueOf(num);
      String[] strinDigits = stringNum.split("");
      List<Double> powerArr = new ArrayList<Double>();

      int[] numbers = Arrays.stream(strinDigits).mapToInt(Integer::parseInt).toArray(); 
      for(int digit : numbers){
         double power = Math.pow(digit, 3);
         powerArr.add(power);
      }

      double totalPowers = powerArr.stream().mapToDouble(Double::doubleValue).sum();

      return (totalPowers == num) ? true : false;
   }
}