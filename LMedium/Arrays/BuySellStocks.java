package LMedium.Arrays;

public class BuySellStocks {
    public static void main(String[] args) {
        int[] arr={1,2,5,6,7,2,4,6,9};
        int maxprofit=0;
        int minimumelement=arr[0];
        for (int i = 1; i < arr.length; i++) {
            int cost=arr[i]-minimumelement;
            maxprofit=Math.max(cost,maxprofit);
            minimumelement=Math.min(minimumelement,arr[i]);

        }
//        return maxprofit;

        System.out.println(maxprofit);




    }
}

