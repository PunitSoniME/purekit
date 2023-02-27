/**
 * Creates a shallow clone of the input value. If the value is an array, a new
 * array is returned, otherwise a new object is returned.
 *
 * @since 1.0.0
 *
 * @template T - The type of the input value.
 * @param {T} value - The value to clone.
 * @returns {T} The cloned value.
 *
 * @example
 *
 * clone([1, 2, 3]); // Returns [1, 2, 3]
 * clone({ x: 1, y: 2 }); // Returns { x: 1, y: 2 }
 * clone(new Map([['x', 1], ['y', 2]])); // Returns a new map containing [['x', 1], ['y', 2]]
 * clone(new Set([1, 2, 3])); // Returns a new set containing [1, 2, 3]
 * clone(new RegExp('ab+c', 'i')); // Returns a new RegExp with the same pattern and flags.
 * clone(new Date()); // Returns a new date with the same value.
 */

const clone = <T>(value: T): T => {
	if (Array.isArray(value)) return value.slice() as T;
	if (value instanceof RegExp)
		return new RegExp(value.source, value.flags) as T;
	if (value instanceof Map) return new Map(value) as T;
	if (value instanceof Set) return new Set(value) as T;
	if (value instanceof Date) return new Date(value) as T;
	if (typeof value === 'object' && value !== null) return { ...value };
	return value;
};

export default clone;
