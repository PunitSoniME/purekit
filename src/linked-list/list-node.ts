export default class ListNode {
	val: any = null;
	next: ListNode | null = null;

	constructor(val: any, next: any) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
