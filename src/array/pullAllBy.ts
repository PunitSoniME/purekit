import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';
import pullAt from './pullAt';

/**
 * Removes all given elements from the array using a custom iteratee function
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T[]} array - The source array
 * @param {T[]} elementsToRemove - The array of elements to be removed
 * @param {Function} [iteratee=identity] - The function invoked per iteration
 * @returns {T[]} - The new array with removed elements
 *
 * @example
 *
 * const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }];
 * const removedUsers = pullAllBy(users, [{ name: 'John' }, { name: 'Jane' }], 'name');
 *
 * console.log(removedUsers); // [{ name: 'Bob', age: 40 }]
 */
const pullAllBy = <T>(
	array: T[],
	elementsToRemove: T[],
	iteratee: predicateType = identity
): T[] => {
	const fn = createPredicate(iteratee);
	let indexesToRemove: number[] = [];

	array.forEach((f: T, index: number) => {
		if (elementsToRemove.some(s => (fn as any)(s) === (fn as any)(f)))
			indexesToRemove.push(index);
	});

	return pullAt(array, indexesToRemove);
};

export default pullAllBy;
