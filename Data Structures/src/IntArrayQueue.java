public class IntArrayQueue {
    private Integer[] data;
    private static final int DEFAULT_CAPACITY = 10;
    private Integer items;


    //front of array is the front of the queue

    public IntArrayQueue() {
        data = new Integer[DEFAULT_CAPACITY];
        items = -1;
    }

    public boolean isEmpty(){
        return items < 0;
    }

    public void clear(){
        data = new Integer[DEFAULT_CAPACITY];
    }

    public boolean enqueue(Integer el){
        if (items+1 == data.length){
            Integer[] temp = new Integer[data.length*2];
            for (int i = 0; i < data.length; i++) {
                temp[i] = data[i];
            }
            data = temp;
        }
        items++;
        data[items] = el;

        return true;
    }

    public Integer dequeue(){
        Integer deqInteger = null;
        if(!isEmpty()) {
            Integer[] temp = new Integer[data.length];
            deqInteger = data[0];
            for (int i = 0; i < items; i++) {
                temp[i] = data[i+1];
            }
            data = temp;
        }
        return deqInteger;        
    }

    public Integer peek(){
        if (isEmpty())
            return null;
        else
            return data[0];
    }

    public String toString() {
        String result = "[";
  
        for (int index = 0; index <= items; index++) {
           result += data[index] + ", ";
        }
  
        if (!isEmpty()) {
           result = result.substring(0, result.length() - 2);
        }
        result += "]";
  
        return result;
     }
}
