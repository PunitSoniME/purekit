const randomFloat = (a = 1, b = 0) => {
	const lower = Math.min(a, b);
	const upper = Math.max(a, b);
	return lower + Math.random() * (upper - lower);
};

const randomInt = (a = 1, b = 0) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));
	return Math.floor(lower + Math.random() * (upper - lower + 1));
};

/**
 * Returns a random number within the specified range. If only one argument is provided, the number will be between 0 and the given number.
 *
 * @since 1.0.0
 *
 * @param {number} [lower=0] - The lower bound of the range (inclusive if `upper` is defined).
 * @param {number|boolean} [upper=1] - The upper bound of the range (exclusive if defined), or a boolean flag indicating whether to return a floating-point number.
 *
 * @returns {number} - A random number within the specified range.
 *
 * @example
 *
 * random(10);
 * // => a random integer between 0 and 9
 *
 * random(1, 11);
 * // => a random integer between 1 and 10
 *
 * random(true);
 * // => a random floating-point number between 0 and 1
 *
 * random(3, 2);
 * // => a random floating-point number between 2 and 3
 */
const random = (
	lower: number = 0,
	upper: number | boolean | undefined = 1 as number
): number => {
	if (upper === undefined) {
		upper = lower;
		lower = 0;
	}

	if ((upper as boolean) === true || parseInt(upper.toString()) !== upper) {
		return randomFloat(upper as number, lower);
	}

	return randomInt(upper, lower);
};
export default random;
