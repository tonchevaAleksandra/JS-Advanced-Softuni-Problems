class ListNode<T>{
  value: T;
  nextNode: ListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.nextNode = null;
  }
}

class SinglyLinkedList<T>{
  length: number;
  head: ListNode<T>;
  tail: ListNode<T>;

  constructor(data: T = null) {
    if (data) {
      const headNode = new ListNode(data);
      this.head = headNode;
      this.tail = headNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  pushInFront(value: T) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length++;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  push(value: T) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length++
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.length++
    }
  }

  secondLastNode() {
    let secondLast
    let last = this.head
    while (last.nextNode) {
      secondLast = last
      last = last.nextNode;
    }
    return secondLast
  }

  pop(): T {
    if (this.isEmpty) {
      return null;
    } else if (this.length === 1) {
      let popped = this.head;
      this.head = this.tail = null;
      this.length = 0;
      return popped.value;
    } else {
      let popped = this.tail;
      let secondLast = this.secondLastNode();
      secondLast.nextNode = null;
      this.tail = secondLast;
      this.length--;
      return popped.value;
    }
  }

  popInFront(): T {
    if (this.isEmpty) {
      return null;
    } else if (this.length === 1) {
      let popped = this.head;
      this.head = this.tail = null;
      this.length = 0;
      return popped.value;
    } else {
      let popped = this.head;
      this.head = popped.nextNode;
      this.length--;
      return popped.value;
    }
  }

  insert(value: T, index: number): boolean {
    if (index > this.length || index < 0) {
      return false;
    } else if (index === this.length) {
      this.push(value);
      return true;
    } else if (index === 0) {
      this.pushInFront(value);
      return true;
    } else {
      let currentNNodeIndex = 0;
      let newNode = new ListNode(value);
      let currentNNodeNode = this.head;
      let previoiousNodeiousNode = null;
      while (currentNNodeIndex < index) {
        previoiousNodeiousNode = currentNNodeNode;
        currentNNodeNode = currentNNodeNode.nextNode;
        currentNNodeIndex++;
      }
      previoiousNodeiousNode.nextNode = newNode;
      newNode.nextNode = currentNNodeNode;
      this.length++;
      return true;
    }
  }

  remove(index: number): T | null {
    if (this.isEmpty) {
      return null;
    } else {
      let currentNNodeIndex = 0;
      let currentNNodeNode = this.head;
      let previoiousNodeiousNode = null;
      while (currentNNodeIndex < index) {
        previoiousNodeiousNode = currentNNodeNode;
        currentNNodeNode = currentNNodeNode.nextNode;
        currentNNodeIndex++;
      }
      previoiousNodeiousNode.nextNode = currentNNodeNode.nextNode;
      this.length--;
      return currentNNodeNode.value;
    }
  }

  reverse(): SinglyLinkedList<T> {
    if (this.isEmpty) {
      return this;
    } else if (this.length === 1) {
      return this;
    } else {
      let previoiousNode = null;
      let currentNNode = this.head;
      let nextNode = null;
      while (currentNNode != null) {
        nextNode = currentNNode.nextNode;
        currentNNode.nextNode = previoiousNode;
        previoiousNode = currentNNode;
        currentNNode = nextNode;
      }
      return this;
    }
  }
}

