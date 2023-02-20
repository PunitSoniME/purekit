import identity from '../util/identity';

/**
 * Creates an array of unique values, in order, by iterating over all elements of all the given arrays, and returning the unique elements by using an iteratee function to extract a value for comparison.
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {...any} args - The rest of the arrays to inspect.
 * @param {string|Function} [iteratee=identity] - The iteratee invoked per element.
 * @returns {T[]} - Returns the new array of combined values.
 * @example
 * unionBy([2.1], [1.2, 2.3], Math.floor);
 * // returns [2.1, 1.2]
 */

const unionBy = <T>(array: T[], ...args: any): T[] => {
	let iteratee = args.pop() ?? identity;
	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return array
		.concat(...args)
		.filter(
			(x, i, self) => i === self.findIndex(y => iteratee(x) === iteratee(y))
		);
};

export default unionBy;
