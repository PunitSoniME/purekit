/**
 * Creates an array of numbers (positive or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * @since 1.0.0
 *
 * @param {number} [start=0] The start of the range.
 * @param {number} [end] The end of the range.
 * @param {number} [step] The value to increment or decrement by.
 * @param {boolean} [checkRangeFromRight=false] Determines if the range
 * should be generated from right to left.
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
const range = (
	start: number = 0,
	end?: number,
	step?: number,
	checkRangeFromRight: boolean = false
): number[] => {
	// if the end is not defined...
	const isEndDef = typeof end !== 'undefined';
	// ...the first argument should be the end of the range...
	end = isEndDef ? end : start;
	// ...and 0 should be the start
	start = isEndDef ? start : 0;

	// if the increment is not defined, we could need a +1 or -1
	// depending on whether we are going up or down
	if (typeof step === 'undefined') {
		step = Math.sign((end as number) - start);
	}

	// calculating the lenght of the array, which has always to be positive
	const length = Math.abs(((end as number) - start) / (step || 1));

	// In order to return the right result, we need to create a new array
	// with the calculated length and fill it with the items starting from
	// the start value + the value of increment.
	const { result } = Array.from({ length }).reduce(
		({ result, current }) => ({
			// checkRangeFromRight === false, then append the current value to the result array
			// checkRangeFromRight === true, then prepend the current value to the result array
			result: checkRangeFromRight ? [current, ...result] : [...result, current],
			// adding the increment to the current item
			// to be used in the next iteration
			current: current + step,
		}),
		{ current: start, result: [] }
	);

	return result;
};
export default range;
