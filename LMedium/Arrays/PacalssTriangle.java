package LMedium.Arrays;

import java.util.ArrayList;
import java.util.Arrays;

public class PacalssTriangle {
    public static void main(String[] args) {

        int n=5;
        int r=2;

        for (int i = 1; i <= n; i++) {

//            System.out.println(generaterow(i)+" ");


            System.out.print(generaterow(i));


        }

        
        
        
        
        
        


    }
    private static ArrayList<Integer> generaterow(int row){
        int ans=1;
        ArrayList<Integer> ansrow=new ArrayList<>();
        ansrow.add(1);
        for (int col = 1; col < row; col++) {
            ans=ans*(row-col);
            ans=ans/(col);
            ansrow.add(ans);
        }
        return ansrow;


        
        
        
        
        
    }

    private static int findncr(int n, int r) {

        int res=1;
        for (int i = 0; i < r; i++) {
            res=res*(n-i);
            res=res/(i+1);
        }
        return res;
    }
}
