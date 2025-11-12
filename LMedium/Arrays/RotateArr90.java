package LMedium.Arrays;

import java.util.Arrays;

public class RotateArr90 {
    public static void main(String[] args) {

        int[][] arr={
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };
        int n=arr.length;

//        bruteforce(arr,n);

        for (int i = 0; i < arr.length-1; i++) {
            for (int j = i+1; j <arr.length ; j++) {

//                arr[i][j]=arr[j][i];
                int temp=arr[i][j];
                arr[i][j]=arr[j][i];
                arr[j][i]=temp;

            }

        }

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }


        for (int i = 0; i <arr.length ; i++) {

            for (int j = 0; j < arr.length/2; j++) {
                int temp=0;
                temp=arr[i][j];
                arr[i][j]=arr[i][arr.length-1-j];
                arr[i][arr.length-1-j]=temp;


            }

        }

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }






    }


    private static void bruteforce(int[][] arr, int n) {
        int[][] rotatedArr = new int[n][n];


        for (int i = 0; i < n; i++) {
            for (int j = 0; j <n ; j++) {

                rotatedArr[j][n-i-1]=arr[i][j];

            }

        }


        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j <arr[0].length ; j++) {
                System.out.print(rotatedArr[i][j]+" ");
            }
            System.out.println();

        }
        System.out.println();
        arr = rotatedArr;

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }

    }
}
