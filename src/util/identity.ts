/**
 * Returns the first argument it receives.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} value - The value to return.
 *
 * @returns {T} Returns the input value.
 *
 * @example
 *
 * identity('hello'); // returns 'hello'
 * identity(42); // returns 42
 */
const identity = <T>(value: T): T => value;
export default identity;
