export class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(val){
        const newNode = new Node(val);
        if (!this.head){
            this.head=newNode;
            this.size++;
        }else{
            
        }

    }
}

const list = new LinkedList();
list.append(10);
console.log(list)