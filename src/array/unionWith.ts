import identity from '../util/identity';

/**
 * This method creates an array of unique values that are included in all given arrays, using a comparator function for equality comparisons.
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {...T[][]} args - The arrays to check for the union.
 * @param {Function} [comparator=identity] - The function to compare values.
 * @returns {T[]} - Returns the new array of combined values.
 * @example
 *
 * unionWith([{ x: 1, y: 2 }, { x: 2, y: 1 }], [{ x: 1, y: 2 }, { x: 2, y: 1 }], (a, b) => a.x === b.x);
 * // => [{ x: 1, y: 2 }, { x: 2, y: 1 }]
 */
const unionWith = <T>(array: T[], ...args: any): T[] => {
	let comparator = args.length > 1 ? args.pop() : identity;

	return array
		.concat(...args)
		.filter((x, i, self) => i === self.findIndex(y => comparator(x, y)));
};

export default unionWith;
