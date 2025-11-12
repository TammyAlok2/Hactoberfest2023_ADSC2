package LMedium.Arrays;

import java.util.*;

public class MajorityElement {
    public static void main(String[] args) {

        int[] arr={2, 2, 1, 3, 1, 1, 3, 1, 1};
        int n=arr.length;

        List<Integer> ls=new ArrayList<>();

        HashMap<Integer,Integer> map=new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            map.put(arr[i],map.getOrDefault(arr[i],0)+1);
        }
//        System.out.println(map);

        int max=Integer.MIN_VALUE;
        int key=0;

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int element = entry.getKey();
            int occurrence = entry.getValue();
            if(occurrence>arr.length/3)
            {
                ls.add(occurrence);
            }
        }
//        ls.add(key);










    }
}
