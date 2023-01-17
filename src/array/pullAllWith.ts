import pullAt from './pullAt';

/**
 *
 * @param array
 * @param elementsToRemove
 * @param comparator
 * @returns
 *
 * @example
 *
 * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 *
 * pullAllWith(array, [{ 'x': 3, 'y': 4 }], isEqual);
 * console.log(array);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
 */
const pullAllWith = <T>(
	array: T[],
	elementsToRemove: T[],
	comparator: Function
): T[] => {
	let indexesToRemove: number[] = [];

	array.forEach((f: T, index: number) => {
		if (elementsToRemove.some(s => comparator(s, f)))
			indexesToRemove.push(index);
	});

	return pullAt(array, indexesToRemove);
};

export default pullAllWith;
