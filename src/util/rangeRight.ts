import range from './range';

/**
 * Creates an array of numbers (positive or negative) progressing from `start` up to or down to `end` (depending on whether `end` is greater than `start` or not), separated by increments of `step`.
 *
 * @since 1.0.0
 *
 * @param {number} [start=0] The start value. If `end` is not specified, this value will be the end value and `start` will be set to 0.
 * @param {number} [end=start] The end value.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} - Returns the new array of numbers.
 *
 * @example
 *
 * range(4);
 * // => [0, 1, 2, 3]
 *
 * range(-4);
 * // => [0, -1, -2, -3]
 *
 * range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * range(0, 20, 5);
 * // => [0, 5, 10, 15, 20]
 *
 * range(0, -4, -1);
 * // => [0, -1, -2, -3, -4]
 *
 * range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * range(0);
 * // => []
 */
const rangeRight = (
	start: number = 0,
	end?: number,
	step?: number
): Array<any> => range(start, end, step, true);
export default rangeRight;
