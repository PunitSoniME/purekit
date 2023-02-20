import IIntersection from './interface/IIntersection';

/**
 * Returns an array containing the elements that are present in all of the input arrays.
 *
 * @template T
 * @param {...T[][]} array - The input arrays.
 * @returns {T[]} An array containing the elements that are present in all of the input arrays.
 */
const intersection: IIntersection = <T>(...array: T[][]): T[] =>
	[...array].reduce((a, b) => a.filter(c => b.includes(c)));
export default intersection;
