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
): boolean => {
	if (end === undefined) {
		end = start;
		start = 0;
	}
	return Math.min(start, end) <= number && number < Math.max(start, end);
};
export default inRange;
