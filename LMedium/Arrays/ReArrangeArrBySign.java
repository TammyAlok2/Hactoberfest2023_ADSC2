package LMedium.Arrays;

import com.sun.jdi.ArrayReference;

import java.util.Arrays;

public class ReArrangeArrBySign {
    public static void main(String[] args) {

        int[]  arr={3,1,-2,-5,2,-4};
        int n=arr.length;
//        bruteforce(arr,n);
        optimal(arr,n);

//        System.out.println(Arrays.toString(arr));






    }

    private static void optimal(int[] arr, int n) {

        int[] ans=new int[n];
        Arrays.fill(ans,0);
        System.out.println(Arrays.toString(ans));
        int pos=0;
        int neg=1;
        for (int i = 0; i < arr.length; i++) {

            if(arr[i]<0){
                ans[neg]=arr[i];
                neg+=2;

            }else{

                ans[pos]=arr[i];
                pos+=2;
            }
        }
        System.out.println(Arrays.toString(ans));




    }

    private static void bruteforce(int[] arr, int n) {
        int[] pos=new int[n/2];
        int[] neg=new int[n/2];
        int counter1=0,counter2=0;


        for (int i = 0; i < arr.length; i++) {
            if(arr[i]<0)
            {
                neg[counter2++]=arr[i];
            }
            if(arr[i]>0){
                pos[counter1++]=arr[i];

            }
        }
//        System.out.println(Arrays.toString(pos));
//        System.out.println(Arrays.toString(neg));

        for (int i = 0; i < n/2; i++) {
            arr[2*i]=pos[i];
            arr[2*i+1]=neg[i];
        }
        System.out.println(Arrays.toString(arr));
    }
}
