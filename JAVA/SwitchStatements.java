import java.util.Scanner;

public class SwitchStatements {
    public static void main(String[] args) {
        int a, b, c; // Declare variables to hold the input numbers and the result
        String operator; // Declare a variable to hold the operator input
        
        Scanner scanner = new Scanner(System.in); // Create a Scanner object to read user input

        System.out.println("Enter any two numbers:"); 
        a = scanner.nextInt(); // Read the first number
        b = scanner.nextInt(); // Read the second number
        
        System.out.println("Enter an operator (+, -, *, /, %):"); 
        operator = scanner.next(); // Read the operator as a string
        
        // Use a switch statement to perform the appropriate operation based on the operator
        switch (operator) {
            case "+": // Addition case
                c = a + b; // Perform addition
                System.out.printf("Addition value: %d\n", c); 
                break;
            case "-": // Subtraction case
                c = a - b; // Perform subtraction
                System.out.printf("Subtraction value: %d\n", c); 
                break;
            case "*": // Multiplication case
                c = a * b; // Perform multiplication
                System.out.printf("Multiplication value: %d\n", c); 
                break;
            case "/": // Division case
                if (b != 0) { // Check for division by zero
                    c = a / b; // Perform division if the divisor is not zero
                    System.out.printf("Division value: %d\n", c); 
                } else {
                    System.out.println("Division by zero is not allowed."); 
                }
                break;
            case "%": // Modulus case
                c = a % b; // Perform modulus operation
                System.out.printf("Modulus value: %d\n", c);
                break;
            default: // Default case for invalid operators
                System.out.println("Invalid operator."); 
        }
        
        scanner.close(); // Close the scanner to avoid resource leaks
    }
}

// Arithmetic Operators
// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// % : Modulus
// ++ : Increment
// -- : Decrement
