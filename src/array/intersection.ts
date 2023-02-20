import IIntersection from './interface/IIntersection';

/**
 * Returns an array of unique values that are included in all given arrays, using `SameValueZero` for equality comparisons.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {...Array<T>} array - The arrays to inspect.
 * @returns {Array<T>} - The array of common elements.
 * @example
 *
 * intersection([1, 2, 3], [4, 3, 2])
 * // => [2, 3]
 *
 * intersection(['apple', 'banana', 'orange'], ['pear', 'apple', 'orange'])
 * // => ['apple', 'orange']
 */
const intersection: IIntersection = <T>(...array: T[][]): T[] =>
	[...array].reduce((a, b) => a.filter(c => b.includes(c)));
export default intersection;
