package LMedium.Arrays;

public class CountSubArrsum {
    public static void main(String[] args) {
        int[] arr={3,1,2,4};
        int n=arr.length;
        int target=6;

        bruteforce(arr,target);






    }

    private static void bruteforce(int[] arr, int target) {
        int counter=0,sum=0;

        for (int i = 0; i < arr.length; i++) {
            sum=0;
            for (int j = i; j < arr.length; j++) {
                    sum+=arr[j];
                    if(sum==target){
                        counter++;
                    }
            }
        }

        System.out.println( counter);
    }
}
