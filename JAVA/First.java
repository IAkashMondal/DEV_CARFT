//  data Type-------------------------------------------->

//  data Type-------------------------------------------->

class First {
    int num = 10; // Instance variable
    static double decimal = 20.5; // Static variable
    
    public static void main(String[] argv) {
        boolean success = true; // Local variable
        short Short = 12345; // short is a data type; 'Short' is a variable name (case-sensitive)
        long Long = 1234567899; // long is a data type; 'Long' is a variable name (case-sensitive)
        char initial = 'A'; // char is a data type
        char symbol = '&'; // char is a data type
        char unicodeChar = '\u03B7'; // char representing a Unicode character (Greek Omega)
        String s = "Ram ram"; // String is a class in Java
        
        First first = new First(); // Creating an instance of class First to access instance variables
        System.out.println(first.num); // Accessing instance variable num through object 'first'

        System.out.println(decimal); // Accessing static variable decimal directly
        
        System.out.println(success + "\n" + Short + "\n" + Long + "\n" + initial + "\n" + symbol + "\n" + unicodeChar + "\n" + s);
        // Printing various variables and values separated by new lines ('\n')
    }
}
