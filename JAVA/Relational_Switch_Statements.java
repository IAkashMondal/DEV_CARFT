import java.util.Scanner;

/**
 * Relational_Switch_Statements
 */
public class Relational_Switch_Statements {

    public static void main(String[] args) {
        int a, b; // Declare variables to hold the input numbers
        
        // Create a Scanner object to read user input
        Scanner scanner = new Scanner(System.in);
        
        // Prompt the user to enter two numbers for comparison
        System.out.println("Enter two numbers to compare:");
        a = scanner.nextInt(); // Read the first number
        b = scanner.nextInt(); // Read the second number
        
        // Close the scanner to avoid resource leaks
        scanner.close();
        
        // Print the results of various relational comparisons
        System.out.printf("Result of %d == %d: %b\n", a, b, a == b);
        System.out.printf("Result of %d != %d: %b\n", a, b, a != b);
        System.out.printf("Result of %d > %d: %b\n", a, b, a > b);
        System.out.printf("Result of %d < %d: %b\n", a, b, a < b);
        System.out.printf("Result of %d >= %d: %b\n", a, b, a >= b);
        System.out.printf("Result of %d <= %d: %b\n", a, b, a <= b);
    }
}
// Relational Operators
// == : Equal to
// != : Not equal to
// > : Greater than
// < : Less than
// >= : Greater than or equal to
// <= : Less than or equal to


