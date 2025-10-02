export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null; //points to the first node
    this.size = 0;
  }

  append(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  //insert on had
  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;  // O(1) - no traversal needed!
}

  remove(value) {
    if (this.head === null) {
      console.log('List is empty, nothing to remove');
      return false;
    }
    if (this.head.data === value) {
      this.head = this.head.next; // Move head to next node
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data == value) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
  }
  removeAll(value) {
    if (this.head === null) {
      console.log('List is empty, nothing to remove');
      return false;
    }
    let removedCount = 0;

    while (this.head !== null && this.head.data === value) {
      this.head = this.head.next;
      this.size--;
      removedCount++;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.data == value) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
  }
  display() {
    if (this.head === null) {
      console.log('List is empty!');
      return;
    }
    let result = '';
    let current = this.head;
    while (current !== null) {
      result += current.data + ' → ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

let myList = new LinkedList();
///mamy element current on ma next