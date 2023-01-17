import java.util.stream.StreamSupport;

public class TestArrStack {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testPop()) {
            System.out.println("Test Failed: testPushPop");
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
        System.out.println("Test failed: " + testFailed);
    }

    private static IntArrayStack prepareArrStack(){
        IntArrayStack test = new IntArrayStack();

        test.push(1);
        test.push(2);
        test.push(3);
        test.push(4);
        test.push(5);

        return test;
    }

    private static boolean testPop(){
        IntArrayStack test = prepareArrStack();

        Integer temp = test.pop();
        if (temp != 5)
            return false;

        IntArrayStack test2 = new IntArrayStack();
        if (test2.pop() != null)
            return false;
        
        return true;
    }

    private static boolean testSearch(){
        IntArrayStack test = prepareArrStack();

        if (test.isEmpty()) 
            return false;

        if (test.search(3) != 2)
            return false;

        if (test.search(5) != 0)
            return false;

        if (test.search(23) != null)
            return false;

        
        IntArrayStack test2 = new IntArrayStack();
        if (test2.search(2) != null)
            return false;
            
        return true;
    }

    private static boolean testPeek() {
        IntArrayStack test = prepareArrStack();

        IntArrayStack test2 = new IntArrayStack();
        
        if (test2.peek() != null)
            return false;

        return true;
    }
}
