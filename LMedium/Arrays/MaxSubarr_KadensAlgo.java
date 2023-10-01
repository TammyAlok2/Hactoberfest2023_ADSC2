package LMedium.Arrays;

public class MaxSubarr_KadensAlgo {
    public static void main(String[] args) {

        int[] arr={-2,1,-3,4,-1,2,1,-5,4};
        int target=6;
        bruteforce(arr,target);
//        bruteforce(arr,target);

        optimal(arr);
    }

    private static void optimal(int[] arr) {
        int max=Integer.MIN_VALUE;
        int sum=0;
        for (int i = 0; i < arr.length; i++) {

            sum+=arr[i];
            if(sum>max){
                max=sum;
            }

            if(sum<0){
                sum=0;
            }

        }
        System.out.println(max);
    }

    private static void bruteforce(int[] arr, int target) {
        int sum=0;int max=Integer.MIN_VALUE;
        for (int i = 0; i <arr.length ; i++) {
            for (int j = i; j < arr.length; j++) {
                    sum+=arr[j];
                    max = Math.max(max, sum);

            }

        }
        System.out.println(max);


    }
}
