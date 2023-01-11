import range from './range';

/**
 *
 * @param start
 * @param end
 * @param step
 * @returns
 */
const rangeRight = (start: number = 0, end?: number, step?: number) =>
	range(start, end, step, true);
export default rangeRight;
