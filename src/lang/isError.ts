/**
 * Checks if a value is an error object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is an error object, else `false`.
 *
 * @example
 *
 * isError(new Error('Something went wrong')) // => true
 *
 * isError('Error') // => false
 */
const isError = (value: any): boolean => value instanceof Error;
export default isError;
