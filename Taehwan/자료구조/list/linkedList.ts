{
  class Node<T = any> {
    data: T;
    next: Node<T> | null;
    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList<T> {
    head: Node<T> | null;
    constructor() {
      this.head = null;
    }

    add(data: T) {
      const node = new Node<T>(data);
      if (this.head === null) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = node;
      }
    }

    remove(data: T) {
      if (this.head === null) {
        return;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next !== null) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next; // current가 한칸씩 이동함
      }
    }

    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}
