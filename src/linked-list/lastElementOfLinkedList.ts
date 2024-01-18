import ListNode from './list-node';

const lastElementOfLinkedList = (list: ListNode) => {
	let lastNode = list;
	if (lastNode) {
		while (lastNode.next) {
			lastNode = lastNode.next;
		}
	}
	return lastNode;
};

export default lastElementOfLinkedList;
