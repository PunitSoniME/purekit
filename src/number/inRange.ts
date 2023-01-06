/**
 *
 * @param number
 * @param start
 * @param end
 * @returns
 */
const inRange = (
	number: number,
	start: number = 0,
	end: number | undefined = undefined
): boolean =>
	(start < number && number < (end ?? 0)) ||
	((end ?? 0) < number && number < start);
export default inRange;
