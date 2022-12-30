/**
 * Checks if value is classified as a Symbol primitive or object.
 * @param value The value to check
 * @returns Returns true if value is a symbol, else false
 */
const isSymbol = (value: any): boolean => typeof value === 'symbol';
export default isSymbol;
