/**
 * Checks if a string ends with a specified target string.
 *
 * @since 1.0.0
 *
 * @param {string} str - The string to check.
 * @param {string} target - The target string to search for at the end of the original string.
 * @param {number} [position=str.length] - The position within the original string to end the search at.
 *
 * @returns {boolean} - `true` if the original string ends with the target string, `false` otherwise.
 *
 * @example
 * const str1 = 'Hello, world!';
 * const str2 = 'Hello, world';
 * const str3 = 'hello, world!';
 *
 * const result1 = endsWith(str1, '!'); // true
 * const result2 = endsWith(str2, '!'); // false
 * const result3 = endsWith(str3, 'world', 7); // true
 */
const endsWith = (str: string, target: string, position: number = str.length) =>
	str.endsWith(target, position);

export default endsWith;
