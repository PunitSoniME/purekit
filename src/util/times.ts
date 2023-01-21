import identity from './identity';

/**
 *
 * @param n
 * @param iteratee
 * @returns
 */
const times = (n: number, func = (i: any = identity) => i) =>
	Array.from({ length: n }).map((_, i) => func(i));

export default times;
