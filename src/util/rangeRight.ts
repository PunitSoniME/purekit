import baseRange from '../helpers/baseRange';

/**
 * Creates an array of numbers (positive or negative) progressing from `start` up to or down to `end` (depending on whether `end` is greater than `start` or not), separated by increments of `step`.
 *
 * @since 1.0.0
 *
 * @param {number} [start=0] The start value. If `end` is not specified, this value will be the end value and `start` will be set to 0.
 * @param {number} [end=start] The end value.
 * @param {number} [step=1] The value to increment or decrement by.
 *
 * @returns {Array} - Returns the new array of numbers.
 *
 * @example
 *
 * rangeRight(4);
 * // => [3, 2, 1, 0]
 *
 * rangeRight(-4);
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 5);
 * // => [4, 3, 2, 1]
 *
 * rangeRight(0, 20, 5);
 * // => [15, 10, 5, 0]
 *
 * rangeRight(0, -4, -1);
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 4, 0);
 * // => [1, 1, 1]
 *
 * rangeRight(0);
 * // => []
 */
const rangeRight = (
	start: number = 0,
	end?: number,
	step?: number
): Array<any> => baseRange(start, end, step, true);
export default rangeRight;
