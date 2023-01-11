import identity from './identity';

/**
 *
 * @param n
 * @param iteratee
 * @returns
 */
const times = (n: number, iteratee: any = identity) =>
	Array.from({ length: n }).map((_, i) => iteratee(i));

export default times;
