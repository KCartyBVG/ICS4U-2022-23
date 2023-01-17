public class IntLLStack {
    private IntLinkedList data;
    private int top;

    public IntLLStack() {
        data = new IntLinkedList();
        top = -1;
    }

    public void push(Integer el){
        data.add(el);
        top++;
    }

    public Integer pop(){
        if (data.isEmpty()) {
            return null;
        } else {
            Integer temp = data.get(top);
            data.remove(temp);
            top--;
            return temp;
        }
    }

    public Integer search(Integer el){
        if (data == null) {
            return null;
        }

        Integer index = -1;

        for (int i = 0; i <= top; i++) {
            if (data.get(i) == el)
                index = i;
        }

        if (index == -1)
            return null;
        else
            return top - index;
    }

    public boolean isEmpty(){
        return data.isEmpty();
    }

    public Integer peek(){
        if (data.isEmpty())
            return null;
        return data.get(top);
    }

    public String toString() {
        String result = "{";

        for (int i = 0; i <= top; i++) {
            result += data.get(i) + ", ";
        }
  
        if (!isEmpty()) {
           result = result.substring(0, result.length() - 2);
        }
        result += "}";
  
        return result;
     }

}
