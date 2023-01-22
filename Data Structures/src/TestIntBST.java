public class TestIntBST {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        prepareBst();

        if (!testFind()) {
            System.out.println("Test Failed: testFind");
            testFailed++;
        } else 
            testPassed++;

        if (!testRemove()) {
            System.out.println("Test Failed: testRemove");
            testFailed++;
        } else 
            testPassed++;
    
        System.out.println("Tests passed: " + testPassed);
        System.out.println("Tests failed: " + testFailed);
    }

    private static IntBST prepareBst() {
        IntBST bst = new IntBST();

        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        // bst.inOrderPrintTraversal();

        //6, 8, 3, 1, 13, 9, 7, 11
        return bst;
    }

    private static boolean testFind(){
        IntBST test = prepareBst();

        Integer temp = test.find(9).getValue();

        if(temp != 9)
            return false;
        if(test.find(6).getValue() != 6)
            return false;
        if(test.find(1).getValue() != 1)
            return false;
        if(test.find(11).getValue() != 11)
            return false;

        return true;
    }

    private static boolean testRemove(){
        IntBST test = prepareBst();

        System.out.println("Initial test tree: ");
        test.inOrderPrintTraversal();

        test.remove(9);

        if (test.find(9) != null)
            return false;
        System.out.println("Removing 9:");
        test.inOrderPrintTraversal();

        test.remove(6);
        if (test.find(6) != null)
            return false;

        System.out.println("Removed 6:");
        test.inOrderPrintTraversal();

        test.remove(11);
        if (test.find(11) != null)
            return false;

        System.out.println("Removed 11:");
        test.inOrderPrintTraversal();

        return true;
    }
}
