package LMedium.Arrays;

public class LongestConsecutiveSubsequence {
    public static void main(String[] args) {

        int[] arr={102,4,100,1,101,3,2,1,1};
        bruteforce(arr);

    }

    private static void bruteforce(int[] arr) {

        int longest=1;
        int x,cnt=0;

        for (int i = 0; i < arr.length; i++) {
            x=arr[i];
            cnt=1;
            while (ls(arr,x+1)==true){
                x=x+1;
                cnt++;
            }
            longest=Math.max(longest,cnt);
        }
        System.out.println(longest);

    }


    private static boolean ls(int[] arr, int i) {

        for (int j = 0; j < arr.length; j++) {
            if(arr[j]==i){
                return true;
            }
        }
        return false;
    }
}
