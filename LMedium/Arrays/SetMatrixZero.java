package LMedium.Arrays;

import java.util.ArrayList;
import java.util.Arrays;

public class SetMatrixZero {
    public static void main(String[] args) {
        int[][]arr={{1,1,1},{1,0,1},{1,1,1}};

//        bruteforce(arr);
        better(arr);

        System.out.println();

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }


    }

    private static void better(int[][] arr) {

        int row[]=new int[arr.length];
        int col[]=new int[arr[0].length];

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {

                if(arr[i][j]==0){
                   row[i]=1;
                   col[j]=1;
                }
            }
        }

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                if(row[i]==1 || col[j]==1){
                    arr[i][j]=0;
                }
            }

        }
        System.out.println(Arrays.toString(row));
        System.out.println(Arrays.toString(col));

    }

    private static void bruteforce(int[][] arr) {

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {

                if(arr[i][j]==0){
                    markrow(arr,i);
                    markcol(arr,j);

                }

            }

        }

        for (int i = 0; i <arr.length ; i++) {
            for (int j = 0; j < arr[0].length; j++) {

                if(arr[i][j]==-1){
                    arr[i][j]=0;
                }

            }

        }

    }

    private static void markcol(int[][] arr,int j) {
        for (int i = 0; i < arr.length; i++) {
            if(arr[i][j]!=0){
                arr[i][j]=-1;
            }
        }
    }

    private static void markrow(int[][] arr,int i) {

        for (int j = 0; j <arr.length ; j++) {

            if(arr[i][j]!=0){
                arr[i][j]=-1;
            }

        }
    }
}
