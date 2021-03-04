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
		const lastNode = this.head;
		const node = new Node(data, lastNode);
		this.head = node;
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
		return this.head;
	}
	getLast() {
		let node = this.head;
		if (!node) return null;
		while (node.next) {
			node = node.next;
		}
		return node;
	}
}

module.exports = { Node, LinkedList };
