import java.util.Scanner;

public class ConditionalRendering {
    public static void main(String[] args) {
        int pass; // Variable to store the password entered by the user
        
        System.out.println("Enter Password"); // Prompting the user to enter a password
        
        Scanner inputObj = new Scanner(System.in); // Creating a Scanner object to read input
        pass = inputObj.nextInt(); // Reading an integer input from the user
        inputObj.close(); // Closing the Scanner object to release resources
        
        // Checking the password and printing appropriate messages
        if (pass == 123) {
            System.out.println("Password is 123");
        } else if (pass == 345) {
            System.out.println("Password is 345");
        } else {
            System.out.println("Wrong password");
        }
    }
}
