import {
	ListNode,
	createLinkedList,
	reversedLinkedList,
} from '../../src/linked-list';

const array = [2, 5, 6, 8, 10];

const reversedList: ListNode = {
	val: 10,
	next: {
		val: 8,
		next: {
			val: 6,
			next: {
				val: 5,
				next: {
					val: 2,
					next: null,
				},
			},
		},
	},
};

describe('Linked List', () => {
	describe('Reversed Linked List', () => {
		let linkedList: ListNode;

		beforeEach(() => {
			linkedList = createLinkedList(array);
		});

		it(`reversedLinkedList(${JSON.stringify(reversedList)})`, () => {
			expect(reversedLinkedList(linkedList)).toEqual(reversedList);
		});
	});
});
