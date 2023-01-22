public class IntBSTNode {
    private Integer value;
    private IntBSTNode leftChild;
    private IntBSTNode rightChild;
 
    public IntBSTNode(Integer value) {
       this.value = value;
       this.leftChild = null;
       this.rightChild = null;
    }
 
    public IntBSTNode(Integer value, IntBSTNode leftChild, IntBSTNode rightChild) {
       this.value = value;
       this.leftChild = leftChild;
       this.rightChild = rightChild;
    }
 
    public boolean hasLeftChild() {
       return leftChild != null;
    }
 
    public boolean hasRightChild() {
       return rightChild != null;
    }
 
    public Integer getValue() {
       return value;
    }
 
    public void setValue(Integer value) {
       this.value = value;
    }
 
    public IntBSTNode getLeftChild() {
       return leftChild;
    }
 
    public void setLeftChild(IntBSTNode leftChild) {
       this.leftChild = leftChild;
    }
 
    public IntBSTNode getRightChild() {
       return rightChild;
    }
 
    public void setRightChild(IntBSTNode rightChild) {
       this.rightChild = rightChild;
    }
 }
