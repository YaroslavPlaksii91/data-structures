class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null = null;

    append(value: T) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(value: T): void {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current.next && current.next.value !== value) {
                current = current.next;
            }
            if (current.next) {
                current.next = current.next.next;
            }
        }
    }

    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    isEmpty(): boolean {
        return this.head === null;
    }
}
