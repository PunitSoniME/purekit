import IIntersection from './interface/IIntersection';

/**
 *
 * @param array
 * @returns
 */
const intersection: IIntersection = <T>(...array: T[][]): T[] =>
	[...array].reduce((a, b) => a.filter(c => b.includes(c)));
export default intersection;
