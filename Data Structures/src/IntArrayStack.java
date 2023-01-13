import java.lang.reflect.Array;
import java.util.concurrent.ArrayBlockingQueue;

import javax.xml.crypto.Data;

public class IntArrayStack {
    private static final int DEFAULT_CAPACITY = 10;
    private int top;
    private Integer[] data;


    public IntArrayStack(){
        data = new Integer[DEFAULT_CAPACITY];
        top = 0;
    }

    public void push(Integer el){
        if (data[top] == null) {        
            Integer newarr[] = new Integer[data.length + 1];
            newarr[0]=el;
            data = newarr;
        } else {
            top++;  
            data[top] = el;
        }
        // for (int i = 0; i < newarr.length; i++) {
        //     newarr[i+1] = data[i];  
        // }   
    }   
    
    public Integer pop(){
        Integer temp = data[top];
        data[top] = null;
        top--;

        return temp;
    }

    public Integer peek() {
        if (top <0) {
            return null;
        } else {
            return data[top];// check this
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

    public boolean empty(){
        if(data[0] ==null) {
            return true;
        } else 
            return false;
    }

    public String toString() {
        String result = "[";
  
        for (int index = 0; index <= top; index++) {
           result += data[index] + ", ";
        }
  
        if (!empty()) {
           result = result.substring(0, result.length() - 2);
        }
        result += "]";
  
        return result;
     }
}
