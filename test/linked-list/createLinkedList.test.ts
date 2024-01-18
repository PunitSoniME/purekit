import { ListNode, createLinkedList } from '../../src/linked-list';

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
	describe('Create Linked List', () => {
		it(`createLinkedList(${array})`, () => {
			expect(createLinkedList(array)).toEqual(createdList);
		});
	});
});
