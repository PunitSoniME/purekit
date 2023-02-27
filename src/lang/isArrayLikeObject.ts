/**
 * Determines whether the given value is an object that has a length property and is not a function.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is an array-like object, `false` otherwise.
 *
 * @example
 * isArrayLikeObject({ length: 0 }); // returns true
 * isArrayLikeObject([1, 2, 3]); // returns true
 * isArrayLikeObject('hello'); // returns true
 * isArrayLikeObject(document.querySelectorAll('.example')); // returns true
 * isArrayLikeObject(() => {}); // returns false
 * isArrayLikeObject(null); // returns false
 */
const isArrayLikeObject = (value: any): boolean => typeof value === 'object';
export default isArrayLikeObject;
