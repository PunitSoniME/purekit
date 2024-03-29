/**
 * Returns the product of all the numbers passed in as arguments.
 *
 * @since 1.0.0
 *
 * @param {...number} numbers - The numbers to multiply.
 * @returns {number} - The product of all the numbers.
 *
 * @example
 *
 * multiply(1, 2, 3, 4, 5);
 * // => 120
 *
 * multiply(3, -5);
 * // => -15
 */
const multiply = (...numbers: number[]): number => {
	return numbers.reduce((oldValue, newValue) => oldValue * newValue, 1);
};

export default multiply;
