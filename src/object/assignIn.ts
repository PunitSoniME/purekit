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
 * assignIn(object, other);
 * // => { 'a': 1, 'b': 2 }
 */
const assignIn = <T>(object: T, ...sources: any[]): T => {
	const length = sources.length;

	if (length < 1 || object == null) return object;
	for (let i = 0; i < length; i++) {
		const source = sources[i];

		for (const key in source) {
			//  @ts-ignore
			object[key] = source[key];
		}
	}
	return object;
};

export default assignIn;
