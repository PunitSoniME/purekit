import { ListNode, lastElementOfLinkedList } from '../../src/linked-list';

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
	describe('Last Element Of Linked List', () => {
		it(`lastElementOfLinkedList(${JSON.stringify(createdList)})`, () => {
			expect(lastElementOfLinkedList(createdList)).toEqual({
				val: 10,
				next: null,
			});
		});
	});
});
