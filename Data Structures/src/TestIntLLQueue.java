public class TestIntLLQueue {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testDequeue()) {
            System.out.println("Test Failed: testDequeue");
            testFailed++;
        } else 
            testPassed++;

        if (!testClear()) {
            System.out.println("Test Failed: testClear");
            testFailed++;
        } else 
            testPassed++;
    
        System.out.println("Tests passed: " + testPassed);
        System.out.println("Test failed: " + testFailed);
    }

    private static IntLLQueue prepareLLQueue() {
        IntLLQueue temp = new IntLLQueue();

        temp.enqueue(1);
        temp.enqueue(2);
        temp.enqueue(3);
        temp.enqueue(4);
        temp.enqueue(5);

        return temp;
    }

    private static boolean testDequeue(){
        IntLLQueue test = prepareLLQueue();

        Integer temp = test.peek();
        if(temp != 1)
            return false;

        temp = test.dequeue();
        if (temp != 1)
            return false;

        temp = test.dequeue();
        if (temp!=2)
            return false;

        IntLLQueue test2 = new IntLLQueue();
        if (test2.dequeue() != null)
            return false;    
            
        if (!test2.isEmpty())
            return false;

        return true;
    }

    private static boolean testClear(){
        IntLLQueue test = prepareLLQueue();

        test.clear();

        if (!test.isEmpty())
            return false;
        
        return true;
    }
}
