import java.util.Scanner;

/**
 * Logical_Oprators
 */
public class Logical_Oprators {

    public static void main(String[] args) {
        boolean a, b; // Declare variables to hold the boolean values
        
        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user to enter two boolean values
        System.out.println("Enter two boolean values (true or false):");
        a = scanner.nextBoolean(); // Read the first boolean value
        b = scanner.nextBoolean(); // Read the second boolean value
        
        // Close the scanner to avoid resource leaks
        scanner.close();
        
        // Print the results of various logical operations
        System.out.printf("Result of %b && %b: %b\n", a, b, a && b); // Logical AND
        System.out.printf("Result of %b || %b: %b\n", a, b, a || b); // Logical OR
        System.out.printf("Result of !%b: %b\n", a, !a); // Logical NOT (unary operator)
    }
}
