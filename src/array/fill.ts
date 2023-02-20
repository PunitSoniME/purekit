/**
 * Fills elements of `array` with `value` from `start` up to, but not including, `end`.
 *
 * @template T
 * @param {T[]} array - The array to modify.
 * @param {any} value - The value to fill `array` with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @returns {T[]} Returns `array`.
 */
const fill = <T>(
	array: T[],
	value: any,
	start: number = 0,
	end: number = array.length
): T[] => {
	array.fill(value, start, end);
	return array;
};

export default fill;
