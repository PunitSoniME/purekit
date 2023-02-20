/**
 * Creates a slice of the `array` with `n` elements taken from the beginning.
 *
 * @template T
 * @param {T[]} array - The array to query.
 * @param {number} [n=1] - The number of elements to take.
 * @returns {T[]} - Returns the slice of `array`.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * 
 * take(numbers, 3); // => [1, 2, 3]
 * take(numbers, 1); // => [1]
 * take(numbers);    // => [1]
 */
const take = <T>(array: T[], n: number = 1): T[] =>
  array.slice(0, n);
export default take;
