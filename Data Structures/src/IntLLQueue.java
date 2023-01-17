public class IntLLQueue {
    private IntLinkedList data;

    /** Link list implementation of a queue where the front of the linked list is the front of the queue */

    public IntLLQueue() {
        data = new IntLinkedList();
    }

    public boolean isEmpty(){
        return data.isEmpty();
    }

    public void clear(){
        data = new IntLinkedList();
    }

    public boolean enqueue(Integer el){
        return data.add(el);
    }

    public Integer dequeue() {
        return data.removeFront();
    }

    public Integer peek() {
        if (data.isEmpty())
            return null;
        else
            return data.get(0);
    }

    public String toString() {
        String result = "{";

        for (int i = 0; i < data.size(); i++) {
            result += data.get(i) + ", ";
        }
  
        if (!isEmpty()) {
           result = result.substring(0, result.length() - 2);
        }
        result += "}";
  
        return result;
     }

}
