package LMedium.Arrays;

import java.util.Arrays;

public class Sort012 {
    public static void main(String[] args) {

        int[] arr={0,1,2,2,1,0};
        int n=arr.length;

//        better(arr);
        optimal(arr);
        System.out.println(Arrays.toString(arr));




    }

    private static void optimal(int[] arr) {

        int low=0,mid=0,high=arr.length-1;
        while (mid<=high){
            if(arr[mid]==0){
                int temp=arr[low];
                arr[low]=arr[mid];
                arr[mid]=temp;
                low++;
                mid++;
            }else if(arr[mid]==1){
                mid++;
            }else{
                int temp=arr[mid];
                arr[mid]=arr[high];
                arr[high]=temp;
                high--;
            }
        }
    }

    private static void better(int[] arr) {
        int cnt1=0,cnt2=0,cnt3=0;
        for (int i = 0; i < arr.length; i++) {
            if(arr[i]==0){
                cnt1++;
            }
            if(arr[i]==1){
                cnt2++;
            }
            if(arr[i]==2){
                cnt3++;
            }
        }

        for (int i = 0; i < cnt1; i++) {
            arr[i]=0;
        }

        for (int i = cnt1; i < cnt1+cnt2; i++) {
            arr[i]=1;
        }

      for (int i = cnt1+cnt2; i < arr.length; i++) {
            arr[i]=2;
        }



    }
}
