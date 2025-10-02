//Input:  1 → 2 → 3 → 4 → 5 → null
// Output: 5 → 4 → 3 → 2 → 1 → null

import { Node, LinkedList } from "./linked_list.js";

export class ExtendedLinkedList extends LinkedList {
    reverse(){
        if(this.head == null || this.head.next == null) return ;
        let prev = null;
        let next= null;
        let current = this.head;

        while(current !== null){  //celujemy sobie w current mamy tu marker
            next= current.next; // zapisujemy nastepny
            current.next = prev; // odwracamy polaczenie
            prev = current // nadpisujemy obecny
            current = next;// przesuwamy 
        }

        this.head = prev;
    }
}


const list = new ExtendedLinkedList();

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.reverse();
list.display();