/**
 * Creates an array of grouped elements, the first element of the tuples containing the first element of the passed arrays, and so on.
 * The provided function is used to combine the tuples in the resulting arrays.
 * If no function is provided, the default function returns the array of tuples.
 *
 * @template T
 * @template TResult
 * @param {T[][]} arrays - The arrays to be grouped together.
 * @param {Function} [iteratee] - The function to combine the elements of the tuples in the resulting arrays.
 * @returns {TResult[]} - Returns the new array of grouped elements.
 *
 * @example
 * zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
 * // => [111, 222]
 */

import identity from '../util/identity';

const zipWith = (arrays: any[], ...args: any[]): any[] => {
	const lastElement = args[args.length - 1];

	if (lastElement instanceof Function && typeof lastElement === 'function') {
		const fn = args.pop() as any;
		return arrays.map((value, idx) =>
			fn(value, ...args.map((arr: any) => arr[idx]))
		);
	}

	//	Below is zip method
	return arrays.map((value, idx) => [
		identity(value),
		...args.map(arr => arr[idx]),
	]);
};

export default zipWith;
