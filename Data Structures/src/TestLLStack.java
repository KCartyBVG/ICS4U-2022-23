public class TestLLStack {

    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testPop()) {
            System.out.println("Test Failed: testPop");
            testFailed++;
        } else 
            testPassed++;

        if (!testSearch()) {
            System.out.println("Test Failed: testSearch");
            testFailed++;
        } else 
            testPassed++;
    
        if (!testPeek()) {
            System.out.println("Test Failed: testPeek");
            testFailed++;
        } else 
            testPassed++;

        System.out.println("Tests passed: " + testPassed);
        System.out.println("Tests failed: " + testFailed);
    }

    public static IntLLStack prepareLLStack(){
        IntLLStack stack = new IntLLStack();

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        return stack;
    }

    public static boolean testPop(){
        IntLLStack test = prepareLLStack();

        Integer temp = test.pop();

        if (temp != 5)
            return false;

        temp = test.pop();
        if (temp != 4)
            return false;

        IntLLStack test2 = new IntLLStack();
        if (test2.pop() != null)
            return false;

        return true;
    }

    public static boolean testSearch() {
        IntLLStack test = prepareLLStack();

        if (test.isEmpty()) 
            return false;

        if (test.search(3) != 2)
            return false;

        if (test.search(5) != 0)
            return false;

        if (test.search(23) != null)
            return false;

        
        IntLLStack test2 = new IntLLStack();
        if (test2.search(2) != null)
            return false;

        return true;
    }

    public static boolean testPeek(){
        IntLLStack test = prepareLLStack();

        if (test.peek() != 5)
            return false;
        
        test.pop();
        if (test.peek() != 4)
            return false;

        IntLLStack test2 = new IntLLStack();
        if (test2.peek() != null)
            return false;       

        return true;
    }
    
}
