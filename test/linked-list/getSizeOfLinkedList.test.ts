import { ListNode, getSizeOfLinkedList } from '../../src/linked-list';

const array = [2, 5, 6, 8, 10];

const createdList: ListNode = {
	val: 2,
	next: {
		val: 5,
		next: {
			val: 6,
			next: {
				val: 8,
				next: {
					val: 10,
					next: null,
				},
			},
		},
	},
};

describe('Linked List', () => {
	describe('Get Size Of Linked List', () => {
		it(`getSizeOfLinkedList(${JSON.stringify(createdList)})`, () => {
			expect(getSizeOfLinkedList(createdList)).toEqual(array.length);
		});
	});
});
