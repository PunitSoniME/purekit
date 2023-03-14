import identity from '../util/identity';

/**
 * Returns an array of unique values that are included in all given arrays, using a provided iteratee function.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to inspect.
 * @param {...Array} args - The arrays to intersect with.
 * @param {Function|string} [iteratee=identity] - The iteratee invoked per element.
 * If a string is provided, it will be used as a property name to create a function that returns the property of the elements.
 *
 * @returns {Array} - Returns the new array of intersecting values.
 *
 * @example
 *
 * intersectionBy([2.1, 1.2], [4.3, 2.4], [1.2, 2.4]);
 * // => [2.1]
 *
 * intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }]
 *
 * intersectionBy([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 2}], (o) => o.x);
 * // => [{'x': 1, 'y': 2}]
 */
const intersectionBy = <T>(array: T[], ...args: any[]): T[] => {
	let iteratee = args ? args.pop() : [identity];

	if (typeof iteratee === 'string') {
		const prop = iteratee;
		iteratee = (item: any) => item[prop];
	}

	return array.filter(item1 =>
		args.every((arr2: any) =>
			arr2.find((item2: any) => iteratee(item1) === iteratee(item2))
		)
	);
};

export default intersectionBy;
