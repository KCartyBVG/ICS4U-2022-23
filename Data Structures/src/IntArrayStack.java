import java.lang.reflect.Array;
import java.util.concurrent.ArrayBlockingQueue;

import javax.xml.crypto.Data;

public class IntArrayStack {
    private static final int DEFAULT_CAPACITY = 10;
    private int top;
    private Integer[] data;

    public IntArrayStack(){
        data = new Integer[DEFAULT_CAPACITY];
        top = -1;
    }

    public void push(Integer el) {
        if (top + 1 == data.length) {
           Integer[] temp = new Integer[data.length * 2];
           for (int i = 0; i < data.length; i++) {
              temp[i] = data[i];
           }
           data = temp;
        }
        top++;
        data[top] = el;
     }
    
     public Integer pop() {
        if (top < 0) {
           return null;
        } else {
           top--;
           return data[top + 1];
        }
     }

     public Integer peek() {
        if (top < 0) {
           return null;
        } else {
           return data[top];
        }
     }

    public Integer search(Integer el){
        int index = 0;
        boolean innit = false;
        for (int i = 0; i <= top; i++) {
            if (data[i] == el) {
                innit = true;
                index = i;
            }
        }
        
        if (innit == false)
            return null;
        else
            return top-index;
    }

    public boolean isEmpty() {
        return top < 0;
    }

    public String toString() {
        String result = "[";
  
        for (int index = 0; index <= top; index++) {
           result += data[index] + ", ";
        }
  
        if (!isEmpty()) {
           result = result.substring(0, result.length() - 2);
        }
        result += "]";
  
        return result;
     }
}
