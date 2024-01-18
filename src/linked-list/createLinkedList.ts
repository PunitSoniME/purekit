import ListNode from './list-node';
import reversedLinkedList from './reversedLinkedList';

const createLinkedList = (array: any[]) => {
	let node: any;

	array.forEach(f => {
		node = new ListNode(f, node);
	});

	return reversedLinkedList(node);
};

export default createLinkedList;
