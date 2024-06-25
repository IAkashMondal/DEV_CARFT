import java.util.Scanner;

public class InputOutput {
    public static void main(String[] args) {
        int a, b, c;
        System.out.println("Add 2 numbers");
        
        Scanner scanner = new Scanner(System.in); // Creating a Scanner object to read input
        
        a = scanner.nextInt(); // Read the first integer input from the user
        b = scanner.nextInt(); // Read the second integer input from the user
        scanner.close(); // Close the Scanner object to release resources
        c = a + b; // Perform addition of the two numbers
        
        System.out.println("Total Sum is : " + c); // Output the result of addition
        
        
    }
}

