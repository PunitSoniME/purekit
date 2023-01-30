// import _memoize from 'lodash/memoize';
// import _values from 'lodash/values'
// import { memoize } from '../../src/function';
// import { values } from '../../src/object'

// var object = { 'a': 1, 'b': 2 };
// var other = { 'c': 3, 'd': 4 };
// var altLodashValues = memoize(values);

// var _object = { 'a': 1, 'b': 2 };
// var _other = { 'c': 3, 'd': 4 };
// var lodashValues = _memoize(_values);

// describe('Function', () => {
// 	describe('memoize', () => {
// 		it('memoize - altLodashValues(object)', () => {
// 			expect(altLodashValues(object)).toEqual(lodashValues(_object));
// 		});

// 		it('memoize - altLodashValues(other)', () => {
// 			expect(altLodashValues(other)).toEqual(lodashValues(_other));
// 		});

// 		it('memoize - modify object.a', () => {
// 			object.a = 2;
// 			_object.a = 2;
// 			expect(altLodashValues(object)).toEqual(lodashValues(_object));
// 		});

// 		// it('memoize - modify object.a', () => {
// 		// 	object.a = 2;
// 		// 	_object.a = 2;
// 		// 	expect(altLodashValues(object)).toEqual(lodashValues(_object));
// 		// });
// 	});
// });
