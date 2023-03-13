/**
 * Repeats a string `n` times.
 *
 * @since 1.0.0
 * 
 * @param {string} str - The string to repeat.
 * @param {number} [n=1] - The number of times to repeat the string.
 * @returns {string} - The repeated string.
 *
 * @example
 *
 * repeat('hello', 3); // returns 'hellohellohello'
 * repeat('hey'); // returns 'hey'
 */
const repeat = (str: string = '', n: number = 1): string => str.repeat(n);
export default repeat;
