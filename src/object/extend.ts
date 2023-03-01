import assignIn from './assignIn';

/**
 * Assigns own enumerable string keyed properties of source objects to the destination object.
 * Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} object - The destination object.
 * @param {...any[]} sources - The source objects.
 * @returns {T} - The modified object.
 *
 * @example
 *
 * const object = { a: 1 };
 * const other = { b: 2 };
 *
 * extend(object, other);
 * // => { 'a': 1, 'b': 2 }
 */
const extend = assignIn;
export default extend;
