/**
 *
 * @param number
 * @param lower
 * @param upper
 * @returns
 */
const clamp = (number: number, lower: number, upper: number): number =>
	upper ? Math.min(Math.max(number, lower), upper) : Math.min(number, lower);

export default clamp;
