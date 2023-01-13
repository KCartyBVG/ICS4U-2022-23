public class IntLLStack {
    private IntLLStack data;
    private int top = data.size();


    public IntLLStack() {
        data = this.//IS IT AN ARRAY OR INT STACK??
    }

    public void push(Integer el){
        data.add(el);
    }

    public Integer pop(){
        if (data.isEmpty()) {
            return null;
        } else {
            IntNode curr = data.head.getData(); //HOW TO ACCESS THE INDEX OF THE LIST??
            Integer temp;
            for (int i = 0; i <= top; i++) {
                curr = curr.getLink();
                temp = curr.getData();
              }
                
              data.remove(temp);
              return temp;
        }
        
    }

    public Integer search(Integer el){
        if (data == null) {
            return null;
        }

        while (el != data.get(top)); //how to get index
    }

    public boolean empty(){
        return data.isEmpty(); //using the already made methods?
        
        /**
         * return data.
         */
    }

    public Integer peek(){
        Integer temp;
        for (int i = 0; i <= top; i++) {
            if (i == top) {
                temp = //AGAIN HOW TO GET THAT INDEX FROM THE LIST
            }
        }
        return temp;
    }

}
