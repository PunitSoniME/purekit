// import _matches from 'lodash/matches';
// import _filter from 'lodash/filter';
// import { matches } from '../../src/util';
// import { filter } from '../../src/collection';
// import { cloneDeep } from '../../src/lang';

// describe('Util', () => {
// 	describe('matches', () => {
// 		it("matches({ 'a': 4, 'c': 6 })", () => {
// 			const objects = [
// 				{ a: 1, b: 2, c: 3 },
// 				{ a: 4, b: 5, c: 6 },
// 			];

// 			expect(filter(objects, matches({ a: 4, c: 6 }))).toEqual(
// 				_filter(objects, _matches({ a: 4, c: 6 }))
// 			);
// 		});

// 		it('matches - sources', () => {
// 			let sources = [{ a: { b: 2, c: 3 } }, { a: 1, b: 2 }, { a: 1 }];

// 			sources.forEach((source: any, index: number) => {
// 				let object = cloneDeep(source),
// 					par = matches(source);

// 				expect(par(object)).toEqual(true);

// 				if (index) {
// 					source.a = 2;
// 					source.b = 1;
// 					source.c = 3;
// 				} else {
// 					source.a.b = 1;
// 					source.a.c = 2;
// 					source.a.d = 3;
// 				}

// 				expect(par(object)).toEqual(true);
// 				expect(par(source)).toEqual(false);
// 			});
// 		});
// 	});
// });
