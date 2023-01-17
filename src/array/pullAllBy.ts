import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';
import pullAt from './pullAt';

/**
 *
 * @param array
 * @param elementsToRemove
 * @param iteratee
 * @returns
 *
 * @example
 *
 * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 *
 * pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
 * console.log(array);
 * // => [{ 'x': 2 }]
 */
const pullAllBy = <T>(
	array: T[],
	elementsToRemove: T[],
	iteratee: predicateType<T> = identity
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
