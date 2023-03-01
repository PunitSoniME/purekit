/**
 * Adds two or more numbers or strings.
 *
 * @since 1.0.0
 *
 * @param {number|string} augend - The first number or string to be added.
 * @param {number|string} addend - The second number or string to be added.
 * @param {...(number|string)} restNumbers - The rest of the numbers or strings to be added.
 * @returns {number} - The sum of all numbers or concatenated string.
 *
 * @example
 * add(2, 3); // returns 5
 * add('Hello', 'World'); // returns 'HelloWorld'
 * add(1, 2, 3, 4); // returns 10
 */
const add = (
	augend: number | string,
	addend: number | string,
	...restNumbers: Array<number | string>
): number => {
	const defaultValue: any =
		typeof augend === 'string' || typeof addend === 'string' ? '' : 0;
	const numbers = [augend, addend, ...restNumbers];
	return numbers.reduce(
		(oldValue, nextValue) => oldValue + nextValue,
		defaultValue
	);
};
export default add;
