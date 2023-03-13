/**
 * Subtracts all the numbers passed in as arguments from the first number passed in.
 *
 * @since 1.0.0
 *
 * @param {...number} numbers - The numbers to subtract from the first number.
 *
 * @returns {number} - The result of subtracting all the numbers from the first number.
 *
 * @example
 *
 * // returns 10
 * subtract(20, 5, 3, 2);
 *
 * // returns 0
 * subtract(10, 5, 2, 3);
 */
const subtract = (...numbers: number[]): number => {
	return numbers.reduce(
		(oldValue, newValue, index) =>
			index === 0 ? newValue : oldValue - newValue,
		0
	);
};

export default subtract;
