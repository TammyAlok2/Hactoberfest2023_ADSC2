package LMedium.Arrays;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class MergeOverlapping {
    public static void main(String[] args) {

        int[][] arr = {{1, 3}, {8, 10}, {2, 6}, {15, 18}};
        mergeOverlappingIntervals(arr);




    }

    private static void mergeOverlappingIntervals(int[][] arr) {
        int n=arr.length;
        Arrays.sort(arr, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[0]-o2[0];
            }
        });

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j <arr.length ; j++) {

                System.out.print(arr[i][j]+" ");

            }
            System.out.println();

        }

//        return 0;



    }
}
