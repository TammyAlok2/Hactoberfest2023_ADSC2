package LMedium.Arrays;

import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

public class MaxFreqElement {
    public static void main(String[] args) {
//        Vector<Integer> v = new Vector<>();
//        v.add(2);
//        v.add(2);
//        v.add(1);
//        v.add(3);
//        v.add(1);
//        v.add(1);
//        v.add(3);
//        v.add(1);
//        v.add(1);
        int[] arr={2,2,1,1,1,2,2};
        int n=arr.length;
        optimal(arr);




//        bruteforce(v);
//        better(v);


    }

    private static void optimal(int[] arr) {
        int counter=0;
        int element=0;

        for (int i = 0; i < arr.length; i++) {
            if(counter==0){
                counter=1;
                element=arr[i];
            }else if(arr[i]==element){
                counter++;
            }else{
                counter--;
            }
        }

        int counter2=0;
        for (int i = 0; i <arr.length; i++) {
            if(arr[i]==element){
                counter2++;
            }
        }
        if (counter2>arr.length/2){
            System.out.println(element);
            System.out.println("yes");
        }

    }

    private static void bruteforce(Vector<Integer> arr) {


//        for (int i = 0; i < arr.size(); i++) {
//
//            int counter=0;
//            for (int j = 0; j <arr.size() ; j++) {
//
//                if(arr[j]==arr[i]){
//                    counter++;
//                }
//
//            }
//            if(counter>arr.size()/2){
//
//                System.out.println("yes",arr[i]);
//            }
//
//        }




    }

    private static void better(Vector<Integer> v) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < v.size(); i++) {
            int key = v.get(i);
            map.put(key, map.getOrDefault(key, 0) + 1);
        }

        int max = 0;
        int keyWithMaxFreq = -1;

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int currentKey = entry.getKey();
            int currentFrequency = entry.getValue();

            if (currentFrequency > max) {
                max = currentFrequency;
                keyWithMaxFreq = currentKey;
            }
        }

        System.out.println(max);
        System.out.println(keyWithMaxFreq);

        if (keyWithMaxFreq > v.size() / 2) {
            System.out.println("yes");
        }

    }

}
