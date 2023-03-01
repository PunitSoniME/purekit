/**
 * Checks if the given number is within the specified range.
 *
 * @since 1.0.0
 *
 * @param {number} number - The number to check.
 * @param {number} [start=0] - The start of the range (inclusive if `end` is defined).
 * @param {number} [end] - The end of the range (exclusive if defined).
 *
 * @returns {boolean} `true` if the number is in range, `false` otherwise.
 *
 * @example
 *
 * // returns true
 * inRange(2, 0, 5);
 *
 * // returns true
 * inRange(2, 5, 0);
 *
 * // returns true
 * inRange(2, 2, 5);
 *
 * // returns false
 * inRange(5, 0, 5);
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
