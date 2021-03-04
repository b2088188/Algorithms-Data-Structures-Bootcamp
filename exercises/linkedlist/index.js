// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(data) {
		this.insertAt(data, 0);
	}
	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			node = node.next;
			count++;
		}
		return count;
	}
	getFirst() {
		return this.getAt(0);
	}
	getLast() {
		// let node = this.head;
		// if (!node) return null;
		// while (node.next) {
		// 	node = node.next;
		// }
		// return node;
		return this.getAt(this.size() - 1);
	}
	clear() {
		this.head = null;
	}
	removeFirst() {
		const firstnode = this.head;
		if (!firstnode) return;
		this.head = firstnode.next;
	}
	removeLast() {
		if (!this.head) return;
		if (this.size() === 1) return (this.head = null);
		let previous = this.head;
		let node = previous.next;
		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}
	insertLast(data) {
		const node = new Node(data);
		const last = this.getLast();
		if (!last) return (this.head = node);
		last.next = node;
	}
	getAt(index) {
		let node = this.head;
		let count = 0;
		while (node) {
			if (count === index) return node;
			node = node.next;
			count++;
		}
		return null;
	}
	removeAt(index) {
		if (!this.head) return;
		if (index === 0) return (this.head = this.head.next);

		let previous = this.getAt(index - 1);
		if (!previous) return;
		previous.next = previous.next?.next || null;
	}
	insertAt(data, index) {
		const node = new Node(data);
		if (!this.head) return (this.head = node);
		if (index === 0) {
			node.next = this.head;
			return (this.head = node);
		}
		let previous = this.getAt(index - 1);
		if (!previous) return (this.getLast().next = node);
		node.next = previous.next;
		previous.next = node;
	}
	forEach(fn) {
		let count = 0;
		let node = this.head;
		while (count <= this.size() - 1) {
			fn(node, count);
			node = node.next;
			count++;
		}
	}
}

module.exports = { Node, LinkedList };
