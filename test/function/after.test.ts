import { after } from '../../src/function';
import { times } from '../../src/util';

describe('Function', () => {
	describe('after', () => {
		function testAfter(n1: number, n2: number) {
			let count = 0;
			times(
				n2,
				after(n1, function () {
					count++;
				})
			);
			return count;
		}

		it('testAfter(5, 5)', () => {
			expect(testAfter(5, 5)).toEqual(1);
		});

		it('testAfter(5, 4)', () => {
			expect(testAfter(5, 4)).toEqual(0);
		});

		it('testAfter(0, 0)', () => {
			expect(testAfter(0, 0)).toEqual(0);
		});

		it('testAfter(0, 1)', () => {
			expect(testAfter(0, 1)).toEqual(1);
		});

		it('testAfter(NaN, 1)', () => {
			expect(testAfter(NaN, 1)).toEqual(1);
		});

		// it("after(1, function () { return ++this.count; })", () => {
		//     //  @ts-ignore
		//     const afterFn = after(1, function () { return ++this.count; });
		//     let object = { 'after': afterFn, 'count': 0 };

		//     object.after();
		//     expect(object.after()).toEqual(2);
		//     expect(object.count).toEqual(2)
		// });
	});
});
