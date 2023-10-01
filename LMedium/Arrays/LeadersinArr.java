package LMedium.Arrays;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

public class LeadersinArr {
    public static void main(String[] args) {

        int[] arr={10,22,12,3,0,6};
        int n=arr.length;
            List<Integer> v=new ArrayList<>();
            boolean leader;
            for (int i = 0; i < arr.length; i++) {
                leader=true;
                for (int j = i+1; j < arr.length ;j++) {
                    if(arr[j]>arr[i]){
                        leader=false;
                        break;
                    }
                }
                if(leader==true){
                    v.add(arr[i]);
                }
            }
            System.out.println(v);











    }
}
