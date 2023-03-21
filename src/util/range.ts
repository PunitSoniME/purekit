import baseRange from '../helpers/baseRange';

/**
 * Creates an array of numbers (positive or negative) progressing from `start` up to, but not including, `end`.
 *
 * @since 1.0.0
 *
 * @param {number} [start=0] - The start of the range.
 * @param {number} [end] - The end of the range.
 * @param {number} [step] - The value to increment or decrement by.
 *
 * @example
 *
 * range(4); // [0, 1, 2, 3]
 * range(-4); // [0, -1, -2, -3]
 * range(1, 5); // [1, 2, 3, 4]
 * range(0, 20, 5); // [0, 5, 10, 15]
 * range(0, -4, -1); // [0, -1, -2, -3]
 *
 * @returns {number[]} - Returns the new array of numbers.
 */
const range = (start: number = 0, end?: number, step?: number): number[] =>
	baseRange(start, end, step);
export default range;
