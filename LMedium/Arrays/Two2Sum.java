package LMedium.Arrays;

import java.util.Arrays;
import java.util.HashMap;

public class Two2Sum {
    public static void main(String[] args) {

        int[] arr={2,6,5,8,11};

        int target=14;

        better(arr,target);
        System.out.println(optimal(arr,target));

    }

    private static boolean optimal(int[] arr, int target) {

        Arrays.sort(arr);
        int left=0;
        int right=arr.length-1;
        while (left<right){
            int sum=arr[left]+arr[right];
            if(sum==target){
                return true;
            }
            if(sum<target){
                left++;
            }else{
                right--;
            }
        }

        return false;



    }

    private static void better(int[] arr, int target) {
        HashMap<Integer,Integer> map=new HashMap<>();
        int ans[]=new int[2];
        for (int i = 0; i < arr.length; i++) {

            int a=arr[i];
            int remaining=target-a;
            if(map.containsKey(remaining)){

                ans[0]=i;
                ans[1]=map.get(remaining);

            }
            map.put(a,i);
        }

    }
}
