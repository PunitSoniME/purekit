/**
 * Parses a string and returns an integer of the specified radix.
 *
 * @since 1.0.0
 * 
 * @param {string} str - The string to parse.
 * @param {number} [radix=10] - The radix used to parse the string. Must be between 2 and 36.
 * 
 * @returns {number} - An integer parsed from the input string.
 *
 * @example
 *
 * parseInt('42'); // 42
 * parseInt('101010', 2); // 42
 */
const parseInt = (str: string = '', radix: number = 10): number =>
	Number.parseInt(str, radix);
export default parseInt;
