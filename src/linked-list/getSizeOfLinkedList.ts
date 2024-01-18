import ListNode from './list-node';

const getSizeOfLinkedList = (list: ListNode) => {
	let count = 0;

	while (list) {
		count++;
		list = list.next as any;
	}

	return count;
};

export default getSizeOfLinkedList;
