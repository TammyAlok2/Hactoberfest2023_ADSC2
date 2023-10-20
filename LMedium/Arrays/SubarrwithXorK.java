package LMedium.Arrays;

public class SubarrwithXorK {
    public static void main(String[] args) {
        int[] arr={4,2,2,6,4};
        int xor=0,count=0;
        int n=arr.length;
        for (int i = 0; i <arr.length; i++) {
            for (int j = i; j < arr.length; j++) {

                for (int k = i; k <=j ; k++) {
                    xor=xor^arr[k];

                    if(xor==k){
                        count++;
                    }


                }

            }
        }

        System.out.println(count);




    }
}
