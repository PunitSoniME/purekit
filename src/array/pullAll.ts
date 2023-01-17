import pullAt from './pullAt';

/**
 *
 * @param array
 * @param elementsToRemove
 * @returns
 *
 * @example
 *
 * let array = ['a', 'b', 'c', 'a', 'b', 'c'];
 * pullAll(array, ['a', 'c'])
 * console.log(array);
 * // => ['b', 'b']
 */
const pullAll = <T>(array: T[], elementsToRemove: T[]): T[] => {
	let indexesToRemove: number[] = [];

	array.forEach((f: T, index: number) => {
		if (elementsToRemove.some(s => s === f)) indexesToRemove.push(index);
	});

	return pullAt(array, indexesToRemove);
};

export default pullAll;
