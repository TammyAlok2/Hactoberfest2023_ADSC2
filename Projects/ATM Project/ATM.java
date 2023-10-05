
/*
 * ATM is simple console based project using java 
 * It will has three main operations balance, withdraw deposit
 */



import java.util.Scanner;

public class ATM{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // declare the balance, withdrae and deposit

        int balance =500;
        int withdraw;
        int deposit;

        while(true){
            System.out.println("----------Welcome to GK ATM ---------------");
            System.out.println("Enter 1 to Withdraw ");
            System.out.println("Enter 2 to deposit ");
            System.out.println("Enter 3 to check balance ");
            System.out.println("Enter 4 to Exit ");

            System.out.print("choose option to perform the operation: ");
            
            int choice = sc.nextInt();

            switch(choice){
                case 1:

                    System.out.print("Enter the amount to withdrawn: ");
                    
                    // get the withdraw from the user
                    withdraw = sc.nextInt();

                    if(balance >= withdraw){
                        balance -= withdraw;
                        System.out.println(withdraw + " amount debited");
                    }
                    //message if the amount is insuficient
                    else{
                        System.out.println(" Insufficient Balance Amount in the account " +  balance);
                    }
                    break;
                case 2:
                    System.out.print("Enter the amount to deposit: ");
                    deposit = sc.nextInt();

                    balance += deposit;
                    System.out.println(deposit + "amount will be deposited  total balance is " + balance);
                    break;
                case 3:
                    // display the balance amount
                    System.out.println("Balance " + balance);
                    break;
                case 4:
                   System.exit(0);
                   sc.close();        
            }
        }
    }
}