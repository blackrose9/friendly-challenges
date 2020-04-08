import java.util.Arrays;
import org.apache.commons.lang3.ArrayUtils;

class Swap {
   public static void main(String[] args) {
         int [] arr = {7, 3, 1, 2, 4, 5, 6};
         int [] Arr = {1, 2, 3, 4, 5, 6, 7};
      System.out.println(needSwap(arr));
   }

   public static int needSwap(int[] ogArray) {
         int[] sortedArray = ogArray.clone();
         Arrays.sort(sortedArray);
         System.out.println(Arrays.toString(sortedArray));
         System.out.println(Arrays.toString(ogArray));
         int numberOfSwaps = 0;

         for(int i=0; i<ogArray.length;i++){
               if(!(ogArray[i]==sortedArray[i])){
                     // find out if the numbers at the [i]index are the same.
                     // find the index of the sorted number in the ogArray
                     // swap it, put it where it's supposed to be.
                  int j = ArrayUtils.indexOf(ogArray, sortedArray[i]); //index 2 
                  int temp = ogArray[i]; //7
                  ogArray[i]=ogArray[j];  //ogIndex at 2
                  //1, 3, 1, 2, 4, 5, 6
                  ogArray[j]=temp; //1, 3, 7, 2, 4, 5, 6
                  //count number of swaps
                  numberOfSwaps++;
               }
         }
         return numberOfSwaps;
   }
}

/*
class GfG  {
      // Function returns the minimum number of swaps
            // required to sort the array
                  public static int minSwaps(int[] arr)      {
                            int n = arr.length;
                            // Create two arrays and use as pairs where first
                            // array is element and second array
                            // is position of first element
                                                ArrayList <Pair <Integer, Integer> > arrpos = new ArrayList <Pair <Integer, Integer> > ();
                                                          for (int i = 0; i < n; i++)
                                                          afunction bubbleSort(items) {
                                                               var length = items.length;
                                                               var swaps;
                                                                    for (var i = 0; i < length; i++) {
                                                                     //Number of passes
                                                                            for (var j = 0; j < (length - i - 1); j++) {
                                                                             //Notice that j < (length - i)
                                                                             //Compare the adjacent positions
                                                                             if (items[j] > items[j + 1]) {
                                                                             swaps++
                                                                             //Swap the numbers
                                                                             var tmp = items[j];
                                                                             //Temporary variable to hold the current number
                                                                             items[j] = items[j + 1]; //Replace current number with adjacent numb
*/