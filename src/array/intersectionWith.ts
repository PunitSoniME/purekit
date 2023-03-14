import IIntersectionWith from './interface/IIntersectionWith';

/**
 * This method is like `intersection` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`.
 * The order and references of result values are determined by the first array.
 *
 * @since 1.0.0
 *
 * @param {T[]} array - The array to inspect.
 * @param {...any} args - The arrays of values to inspect.
 * @returns {T[]} - Returns the new array of intersecting values.
 *
 * @example
 *
 * intersectionWith(
 *   [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }],
 *   [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }],
 *   (a, b) => a.x === b.x && a.y === b.y
 * );
 * // => [{ 'x': 1, 'y': 2 }]
 */
const intersectionWith: IIntersectionWith = <T>(
	array: T[],
	...args: any
): T[] => {
	let comparator = args.pop();

	return array.filter(item1 =>
		args.every((arr2: any) =>
			arr2.find((item2: any) => comparator(item1, item2))
		)
	);
};
export default intersectionWith;
