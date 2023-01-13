import java.util.stream.StreamSupport;

public class TestArrStack {
    public static void main(String[] args) {
        // testPushPop();
        testSearch();

    }

    private static void testPushPop(){
        IntArrayStack test = new IntArrayStack();

        test.push(1);
        test.push(4);
        test.push(2);
        test.push(8);
        System.out.println(test);

        Integer temp = test.pop();
        System.out.println(test);
        System.out.println(temp);

        System.out.println(test.peek());

    }

    private static void testSearch(){
        IntArrayStack test = new IntArrayStack();

        System.out.println(test.empty());

        test.push(1);
        test.push(1);
        test.push(3);
        test.push(1);
        test.push(1);
        test.push(9);
        test.push(1);
        test.push(1);
        System.out.println(test);

        System.out.println(test.search(3));

        System.out.println(test.empty());        
    }
}
