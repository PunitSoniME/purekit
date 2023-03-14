/**
 * Checks if a given value is a symbol.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 *
 * @returns {boolean} - Returns `true` if the value is a symbol, else `false`.
 *
 * @example
 *
 * isSymbol(Symbol.iterator); // => true
 * isSymbol('abc'); // => false
 */
const isSymbol = (value: any): boolean => typeof value === 'symbol';
export default isSymbol;
