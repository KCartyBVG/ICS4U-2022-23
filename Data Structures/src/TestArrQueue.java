import javax.xml.transform.Templates;

public class TestArrQueue {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testDequeue()) {
            System.out.println("Test Failed: testDequeue");
            testFailed++;
        } else 
            testPassed++;

        if (!testPeek()) {
            System.out.println("Test Failed: testPeek");
            testFailed++;
        } else 
            testPassed++;
        
        if (!testClear()) {
            System.out.println("Test Failed: testClear");
            testFailed++;
        } else 
            testPassed++;
    
        System.out.println("Tests passed: " + testPassed);
        System.out.println("Tests failed: " + testFailed);
    }

    private static IntArrayQueue prepareQueue() {
        IntArrayQueue temp = new IntArrayQueue();

        temp.enqueue(1);
        temp.enqueue(2);
        temp.enqueue(3);
        temp.enqueue(4);
        temp.enqueue(5);

        return temp;
    }

    private static boolean testDequeue(){
        IntArrayQueue test = prepareQueue();

        if (test.isEmpty())
            return false;

        Integer temp = test.dequeue();
        if(temp != 1)
            return false;

        temp = test.dequeue();
        if (temp != 2)
            return false;

        IntArrayQueue test2 = new IntArrayQueue();
        if (test2.dequeue() != null)
            return false;

        return true;
    }

    private static boolean testPeek(){
        IntArrayQueue test = prepareQueue();

        if(test.peek() != 1)
            return false;
        test.dequeue();
        if(test.peek() != 2)
            return false;

        IntArrayQueue test2 = new IntArrayQueue();
        if (test2.peek() != null)
            return false;

        return true;
    }

    private static boolean testClear(){
        IntArrayQueue test = prepareQueue();

        test.clear();
        if(test.isEmpty() == true)
            return false;

        return true;
    }



}
