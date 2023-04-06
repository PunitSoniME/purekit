// import _memoize from 'lodash/memoize';
// import _values from 'lodash/values'
// import { memoize } from '../../src/function';
// import { values } from '../../src/object'

// var object = { 'a': 1, 'b': 2 };
// var other = { 'c': 3, 'd': 4 };
// var values = memoize(values);

// var _object = { 'a': 1, 'b': 2 };
// var _other = { 'c': 3, 'd': 4 };
// var lodashValues = _memoize(_values);

// describe('Function', () => {
// 	describe('memoize', () => {
// 		it('memoize - values(object)', () => {
// 			expect(values(object)).toEqual(lodashValues(_object));
// 		});

// 		it('memoize - values(other)', () => {
// 			expect(values(other)).toEqual(lodashValues(_other));
// 		});

// 		it('memoize - modify object.a', () => {
// 			object.a = 2;
// 			_object.a = 2;
// 			expect(values(object)).toEqual(lodashValues(_object));
// 		});

// 		// it('memoize - modify object.a', () => {
// 		// 	object.a = 2;
// 		// 	_object.a = 2;
// 		// 	expect(values(object)).toEqual(lodashValues(_object));
// 		// });
// 	});
// });
