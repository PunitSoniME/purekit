import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

/**
 * Returns the object in an array of objects with the minimum value calculated using the given iteratee.
 *
 * @since 1.0.0
 *
 * @template T
 *
 * @param {T[]} collection - The array of objects to search for the minimum value.
 * @param {predicateType<T>} iteratee - The iteratee to use for extracting the values to compare for the minimum.
 *
 * @returns {T} The object with the minimum value calculated using the iteratee.
 *
 * @example
 *
 * // returns { name: 'alice', age: 25 }
 * minBy([{ name: 'alice', age: 25 }, { name: 'bob', age: 30 }, { name: 'charlie', age: 20 }], (obj) => obj.age);
 *
 * // returns { name: 'brenda', age: 25 }
 * minBy([{ name: 'alice', age: 30 }, { name: 'brenda', age: 25 }, { name: 'charlie', age: 30 }], (obj) => obj.name.length);
 */
const minBy = <T>(collection: T, iteratee: predicateType<T>): T => {
	const fn = createPredicate(iteratee);
	return (collection as any[]).reduce((a, b) => {
		return (fn as any)(a) <= (fn as any)(b) ? a : b;
	}, {});
};

export default minBy;
