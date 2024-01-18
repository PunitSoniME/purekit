import ListNode from './list-node';

const reversedLinkedList = (list: ListNode) => {
	let prev: any = null;
	let head: any = list;

	while (head) {
		let next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
};

export default reversedLinkedList;
