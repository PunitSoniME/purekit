/**
 * Merges the own and inherited enumerable string keyed properties of source objects into the destination object recursively
 * for all destination properties that resolve to undefined. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * @since 1.0.0
 *
 * @param {Object} destination - The object to merge properties into.
 * @param {...Object} sources - The source objects to merge properties from.
 *
 * @returns {Object} - A new object with the merged properties.
 *
 * @example
 *
 * const result = defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // Returns { 'a': { 'b': 2, 'c': 3 } }
 */
function defaultsDeep(destination: any, ...sources: any[]): Object {
	const merged =
		destination instanceof RegExp
			? destination
			: Object.assign({}, destination); // create a new object to merge into
	sources.forEach(source => {
		if (source === null || typeof source !== 'object') {
			return;
		}
		Object.keys(source).forEach(key => {
			if (!source.hasOwnProperty(key)) return;
			if (key === '__proto__' || key === 'constructor') return;

			const sourceValue = source[key];
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				const destinationValue = merged[key];
				// check for prototype pollution
				if (destinationValue === undefined) {
					merged[key] = sourceValue;
				} else if (typeof sourceValue === 'object') {
					merged[key] = defaultsDeep(destinationValue, sourceValue);
				}
			}
		});
	});
	return merged;
}

export default defaultsDeep;
