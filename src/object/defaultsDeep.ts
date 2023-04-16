/**
 * Merges the own and inherited enumerable string keyed properties of source objects into the destination object recursively
 * for all destination properties that resolve to undefined. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * @since 1.0.0
 *
 * @param {T} destination - The object to merge properties into.
 * @param {...Object} sources - The source objects to merge properties from.
 *
 * @returns {T} - A new object with the merged properties.
 *
 * @example
 *
 * const result = defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // Returns { 'a': { 'b': 2, 'c': 3 } }
 */
function defaultsDeep<T>(destination: T, ...sources: T[]): T {
	sources.forEach(source => {
		if (source === null || typeof source !== 'object') {
			return;
		}
		Object.keys(source).forEach(key => {
			const _key = key as keyof T;
			const sourceValue = source[_key];
			if (destination[_key] === undefined) {
				destination[_key] = sourceValue;
			} else if (typeof sourceValue === 'object') {
				destination[_key] = defaultsDeep(destination[_key], sourceValue);
			}
		});
	});
	return destination;
}

export default defaultsDeep;
