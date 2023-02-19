/**
 * Applies the provided function to the provided value and returns the result.
 *
 * @param value - The value to be passed through the function.
 * @param fn - The function to be applied to the value.
 * @return The result of applying the function to the value.
 */
const thru = (value: any, fn: Function) => {
	return fn(value);
};

export default thru;
